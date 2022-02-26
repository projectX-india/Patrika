const { assert } = require('chai');

const News = artifacts.require('./News.sol');

require('chai').use(require('chai-as-promised')).should()


contract('News',([deployer,author,liker]) => {
    let news

    before(async () => {
        news = await News.deployed()
    })

    describe('Deployment',async () => {
        
        it('Deploys Successfully', async () => {
            const address = await news.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address,null)
            assert.notEqual(address,undefined)
        })

        it('Application Name',async () => {
            const name = await news.Name()
            assert.equal(name,'Patrika')
        })
    })

    describe('Post',async () => {
        let result,postCount;
        const contentHash="naman123";
        const summaryHash="lol123";
        
        before(async () => {
            result = await news.createPost( contentHash, summaryHash,true,{from:author})
            postCount = await news.PostCount()
        })
        
        it('Post Creation', async ()=> {
            assert.equal(postCount,1)

            // Getting data from event as event is created
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(),postCount.toNumber(),"Post Id Correct")
            assert.equal(event._ContentHash,contentHash,"Content Hash Correct")
            assert.equal(event._SummaryHash,summaryHash,"Summary Hash Correct")
            assert.equal(event.Donation,'0',"Initial Donation Ammount Correct")
            assert.equal(event.isNSFW,true,'NSFW bool Correct') 
            assert.equal(event.Reporter,author,'Reporter Correct') 

            // Blank hash post should not be created
            await news.createPost(contentHash,'',true,{from:author}).should.be.rejected;
            // Blank image description post should not be created
            await news.createPost('',summaryHash,true,{from:author}).should.be.rejected;
            // // Blank from post should not be created
            await news.createPost(contentHash,summaryHash,true,{from:''}).should.be.rejected;

        })

        it('Post is listed', async () => {
            const post = await news.Posts(postCount)
          
            assert.equal(post.id.toNumber(),postCount.toNumber(),"Post Id Correct")
            assert.equal(post.ContentHash,contentHash,"Content Hash Correct")
            assert.equal(post.SummaryHash,summaryHash,"Summary Hash Correct")
            assert.equal(post.Donation,'0',"Donation Ammount Correct")
            assert.equal(post.isNSFW,true,'NSFW bool Correct') 
            assert.equal(post.Reporter,author,'Reporter Correct') 
        })

  

        it('Post can be Liked', async () => {
            const post = await news.Posts(postCount)
            const oldLikes = post.Likes

            // Tipping  a Post
            result = await news.likePost(postCount,{from: liker})
            
            // Checking if postLiked event is emitted with same data
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), postCount.toNumber(),'ID correct')
            assert.equal(event._ContentHash,contentHash,"Content Hash Correct")
            assert.equal(event.Likes.toNumber(),oldLikes.toNumber()+1,"Post successfully liked")
            assert.equal(event.Reporter,author,'Reporter correct')

        })

        it('Post can be Donated', async () => {
            // Tracking author's balance before post is liked
            let oldAuthorBalance
            oldAuthorBalance = await web3.eth.getBalance(author)
            oldAuthorBalance = new web3.utils.BN(oldAuthorBalance)

            // Tipping  a Post
            result = await news.fundPost(postCount,{from: liker,value: web3.utils.toWei('1','Ether')})
            
            // Checking if postLiked event is emitted with same data
            const event = result.logs[0].args
            assert.equal(event.id.toNumber(), postCount.toNumber(),'ID correct')
            assert.equal(event.Donation,'1000000000000000000',"Donation Ammount is Correct")
            assert.equal(event.Reporter,author,'Reporter correct')

            // // Checking that author received the funds
            let newAuthorBalance
            newAuthorBalance = await web3.eth.getBalance(author)
            newAuthorBalance = new web3.utils.BN(newAuthorBalance)
            let tipAmount
            tipAmount = web3.utils.toWei('1','Ether')
            tipAmount = new web3.utils.BN(tipAmount)
            const expectedBalance = oldAuthorBalance.add(tipAmount)           
            assert.equal(newAuthorBalance.toString(),expectedBalance.toString())

            // // Liking not allowed on non existing posts
            await news.fundPost(99,{from: liker,value: web3.utils.toWei('1','Ether')}).should.be.rejected;
        })

    })

})