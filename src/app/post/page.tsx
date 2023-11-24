"use client"

import Link from 'next/link';
import { useState } from 'react'
import cl from './posts.module.scss'
import ReactPaginate from 'react-paginate';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })

  return response.json();
}

export default async function Posts() {
  const posts = await getPosts();

  // const [itemOffset, setItemOffset] = useState(0);

  // const endOffset = itemOffset + 10;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = posts.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(posts.length / 10);

  // const handlePageClick = (event : any) => {
  //   const newOffset = (event.selected * 10) % posts.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };


  return (
    <main className={cl.posts}>
      <h1 className={cl.posts__title}>Posts</h1>
      <ul className={cl.posts__list}>
        {posts.map((post : any) => 
          <li className={cl.posts__list_element} key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        )}
      </ul>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </main>
  )
}
