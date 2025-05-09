import { Suspense } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar'

function App() {
const blogPromiss = fetch('blog.json').then(res => res.json());
  return (
    <>
      <Navbar></Navbar>
      <div className='w-11/12 mx-auto py-8'>
        <div className='w-[66%]'>
          <Suspense fallback='<h2>Blogs is loading....</h2>'>
            <Blogs blogPromiss={blogPromiss}></Blogs>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
