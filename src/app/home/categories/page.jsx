import Image from 'next/image';
import React from 'react';
import "./categories.css"
import Link from 'next/link';



const page = () => {
  return (
    <div className="category-wrapper">
        <h3 className="mg-t-1">Categories</h3>
        <div className="category-wrapper-second category-container">
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src="" 
                        alt="science icon"/>
                    <span>Front-End Web Dev</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className=" category-card mg-1">
                    <Image className="category-img" src="" 
                        alt="sports icon"/>
                    <span>Back-End Web Dev</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src="" 
                        alt="music icon"/>
                    <span>Full-stack Web Dev</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src="" 
                        alt="travel icon"/>
                    <span>Graphics Design</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src="" 
                        alt="science icon"/>
                    <span>UI/UX Design</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src="" 
                        alt="sports icon"/>
                    <span>Desktop Publishing</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src="" 
                        alt="music icon"/>
                    <span>UTME Mock</span>
                </div>
            </Link>
        </div>
    </div>
  );
}

export default page;
