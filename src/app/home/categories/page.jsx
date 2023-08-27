import Image from 'next/image';
import React from 'react';
import "./categories.css"
import Link from 'next/link';
import frontEnd from "../../../images/12832384_5088206.jpg"
import backEnd from "../../../images/7401752_3657969.svg"
import graphics from "../../../images/31283901_7814561.jpg"
import uiux from "../../../images/31283899_7814553.jpg"
// import software from "../../../images"



const page = () => {
  return (
    <div className="category-wrapper">
        <h3 className="mg-t-1">Categories</h3>
        <div className="category-wrapper-second category-container">
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src={frontEnd} 
                        alt="Front-End"/>
                    <span className="package">Front-End</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className=" category-card mg-1">
                    <Image className="category-img" src={backEnd}
                        alt="Back-End"/>
                    <span className="package">Back-End</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src={backEnd}
                        alt="Full-stack"/>
                    <span className="package">Full-stack</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src={graphics}
                        alt="Graphics Design"/>
                    <span className="package">Graphics Design</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src={uiux} 
                        alt="UI/UX Design"/>
                    <span className="package">UI/UX Design</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src={graphics} 
                        alt="Desktop Publishing"/>
                    <span className="package">Desktop Publishing</span>
                </div>
            </Link>
            <Link className="txt-md" href="./rules">
                <div className="category-card mg-1">
                    <Image className="category-img" src="" 
                        alt="Software Dev"/>
                    <span className="package">Software Dev</span>
                </div>
            </Link>
        </div>
    </div>
  );
}

export default page;
