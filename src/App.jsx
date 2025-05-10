import { Suspense, useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar'

function App() {
const blogPromiss = fetch('blog.json').then(res => res.json());

const [bookmarked, setBookmarked] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handelBookmark = (blog) =>{
  const bookmarkList = [...bookmarked,blog];
  setBookmarked(bookmarkList)
}
const handleMarkAsRead = (time,id) =>{
  const totalTime = readingTime + time;
  setReadingTime(totalTime)
  handleRemoveBookmarked(id);
}
const handleRemoveBookmarked = (id)=>{
  const remainingBookmaeked = bookmarked.filter(mark => mark.id !==id);
  setBookmarked(remainingBookmaeked)
}

  return (
    <>
      <Navbar></Navbar>
      <div className='w-11/12 mx-auto pb-[50px] md:pb-[100px] flex flex-col-reverse md:flex-row gap-[2%]'>
        <div className='left-part w-full md:w-[66%] bg-white'>
          <Suspense fallback='<h2>Blogs is loading....</h2>'>
            <Blogs 
            blogPromiss={blogPromiss} 
            handelBookmark={handelBookmark} 
            handleMarkAsRead={handleMarkAsRead}>
            </Blogs>
          </Suspense>
        </div>
        
        <div className="right-part w-full md:w-[32%] ">
          <div className='px-12 py-5 bg-[#6047EC]/[0.1] text-center rounded-lg border border-[#6047EC] mt-10 mb-6 '>
            <button className='font-exo font-bold text-2xl text-[#6047EC]'>Spent time on read : {readingTime} min</button>
          </div>
          <div className='flex flex-col gap-5 bg-[#111111]/[0.05] rounded-lg p-8'>
            <h2 className='font-exo font-bold text-2xl'>Bookmarked Blogs :{bookmarked.length}</h2>
            {
              bookmarked.map((marked,i)=><p key={i} className='bg-white rounded-lg font-exo font-semibold text-lg p-5'>{marked.title}</p>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
