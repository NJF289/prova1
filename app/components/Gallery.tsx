export default function Gallery() {
    return (
        <div className=" mt-4 border-t-4 border-[gray]">
            <p className="font-bold text-left mt-8"> Ipsum sed dolor</p>
            <p className="font-bold text-left text-[red]">____________________</p>

        <div className=" text-left grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-md lg:rounded-lg mt-8">
          <a href="">
            <img src="/img/a.png" alt="" />
            <div>
              <h1 className="font-bold mt-3">Interdum aenean</h1>
              <p className=" mt-3">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <button className="btn border-4 border-red-500 mt-5 text-[red] font-bold ; ">More</button>
            </div>
          </a>
        </div>
    
        <div className="rounded-md lg:rounded-lg mt-8">
          <a href="">
            <img src="/img/b.png" alt="" />
            <div>
              <h1 className="font-bold mt-3">Nulla amet dolore</h1>
              <p className=" mt-3">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <button className="btn border-4 border-red-500 mt-5 text-[red] font-bold ; ">More</button>
            </div>
          </a>
        </div>

        <div className="rounded-md lg:rounded-lg mt-8">
          <a href="">
            <img src="/img/c.png" alt="" />
            <div>
              <h1 className="font-bold mt-3">Tempus ullamcorper</h1>
              <p className=" mt-3">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <button className="btn border-4 border-red-500 mt-5 text-[red] font-bold ; ">More</button>
            </div>
          </a>
        </div>

        <div className="rounded-md lg:rounded-lg mt-8">
          <a href="">
            <img src="/img/d.png" alt="" />
            <div>
              <h1 className="font-bold mt-3">Sed etiam facilis</h1>
              <p className=" mt-3">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <button className="btn border-4 border-red-500 mt-5 text-[red] font-bold ; ">More</button>
            </div>
          </a>
        </div>

        <div className="rounded-md lg:rounded-lg mt-8">
          <a href="">
            <img src="/img/e.png" alt="" />
            <div>
              <h1 className="font-bold mt-3">Feugiat lorem aenean</h1>
              <p className=" mt-3">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <button className="btn border-4 border-red-500 mt-5 text-[red] font-bold ; ">More</button>
            </div>
          </a>
        </div>

        <div className="rounded-md lg:rounded-lg mt-8">
          <a href="">
            <img src="/img/f.png" alt="" />
            <div>
              <h1 className="font-bold mt-3">Amet varius aliquam</h1>
              <p className=" mt-3">Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
              <button className="btn border-4 border-red-500 mt-5 text-[red] font-bold ; ">More</button>
            </div>
          </a>
        </div>
        
    </div>
    </div>
    );
}