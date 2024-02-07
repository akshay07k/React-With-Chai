import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import {Container, PostCard } from '../components'
import { Link } from 'react-router-dom'
function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts()
        .then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if(posts.length === 0){
        return (
            <div className='w-full h-[55vh] py-4 text-center bg-white
            flex items-center justify-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-5xl
                            font-bold hover:text-gray-500'>
                                Login to read posts!
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default Home