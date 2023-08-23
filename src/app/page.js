import Link from "next/link";
import Image from "next/image";
// import logo from "../Logo 1.jpg";

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <div className="bg-image"></div>
            <h1>SSETH Quiz App</h1>
          </div>

          <div className="row">
            <div className="box">
              <h2>
                <Link href="/quiz">Web Dev. (Front-End)</Link>
              </h2>
            </div>

            <div className="box">
              <h2>
                <Link href="/quiz">Web Dev. (Back-End)</Link>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="box">
              <h2>
                <Link href="/quiz">UI / UX</Link>
              </h2>
            </div>

            <div className="box">
              <h2>
                <Link href="/quiz">Graphics Design</Link>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="box">
              <h2>
                <Link href="/quiz">Desktop Publishing</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
