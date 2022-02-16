// SPDX-License-Identifier: MIT
pragma solidity >=0.8.11;

contract News {
    string public Name = "Patrika";

    // structure for post
    struct Post {
        // news content
        string ContentHash; // hash of ipfs text
        string SummaryHash; // hash of ipfs summary text
        
        uint Likes; // Number of likes
                    // trasaction with every increase

        uint Donation; // Donation by the users to the owner

        address Reporter;  // Reporter of the news
    }

}