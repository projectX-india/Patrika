// SPDX-License-Identifier: MIT
pragma solidity >=0.8.11;

contract News {
    string public Name = 'Patrika';

    // structure for post
    struct Post {
        uint256 id;
        // news content
        string ContentHash; // hash of ipfs text
        string SummaryHash; // hash of ipfs summary text
        int256 Likes; // Number of likes
        // trasaction with every increase
        bool isNSFW; // Flag if content is NSFW
        uint256 Donation; // Donation by the users to the owner
        address Reporter; // Reporter of the news
    }

    // Event to emit when new post is created
    event newPost(
        uint256 id,
        string _ContentHash,
        string _SummaryHash,
        int256 Likes,
        bool isNSFW,
        uint256 Donation,
        address Reporter
    );

    // Event to emit when a post is liked
    event likedPost(
        uint256 id,
        string _ContentHash,
        int256 Likes,
        address Reporter
    );

    // Event for Donating a post
    event fundedPost(uint256 id, uint256 Donation, address Reporter);

    // Storing all the Posts
    mapping(uint256 => Post) public Posts;

    // Id of the post and post counts
    uint256 public PostCount = 0;

    function createPost(
        string memory _ContentHash,
        string memory _SummaryHash,
        bool _isNSFW
    ) public {
        // Checking if content is empty
        require(bytes(_ContentHash).length > 0);
        // checking if symmary is empty
        require(bytes(_SummaryHash).length > 0);
        // making sure address is not null
        require(msg.sender != address(0));

        // increasing the count of Posts
        PostCount = PostCount + 1;

        // Posting the value of post
        Posts[PostCount] = Post(
            PostCount,
            _ContentHash,
            _SummaryHash,
            0,
            _isNSFW,
            0,
            msg.sender
        );

        // Emiting the newPost event on creation of new post
        emit newPost(
            PostCount,
            _ContentHash,
            _SummaryHash,
            0,
            _isNSFW,
            0,
            msg.sender
        );
    }

    function likePost(uint256 _id) public {
        // Checking if id is real
        require(_id > 0 && _id <= PostCount);
        // Fetching the Post
        Post storage _post = Posts[_id];
        // Liking the Post
        _post.Likes = _post.Likes + 1;

        emit likedPost(_id, _post.ContentHash, _post.Likes, _post.Reporter);
    }

    function fundPost(uint256 _id) public payable {
        // cheking if id is real
        require(_id > 0 && _id <= PostCount);
        // Fetching the post
        Post storage _post = Posts[_id];
        // Getting the wallet address of the author
        address _Reporter = _post.Reporter;
        // Transferring the message value to the author
        payable(address(_Reporter)).transfer(msg.value);
        // Increasing the Donation amount counter
        _post.Donation = _post.Donation + msg.value;

        emit fundedPost(_id, _post.Donation, _post.Reporter);
    }
}
