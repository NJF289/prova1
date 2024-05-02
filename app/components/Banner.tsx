    export default function Banner() {
        return (
            <div className="flex flex-col-reverse mt-4 border-t-4 border-[#F56A6A] grid-cols-2 md:grid gap-8">
                <div className="md:mr-2"> 
                    <h1 className=" text-[20px] font-bold mt-10 md:text-[30px]">Hi, I'm Teacher by UTFPR.</h1>
                    <h3 className="text-[#7F888F] invisible md:visible md:mt-3">A free and fully responsive site template</h3>
                    <p className="text-[#7F888F] md:mt-5">Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                    <button className="btn mt-6 invisible md:visible md:border-2 md:border-[#F56A6A] md:rounded-[4px] md:text-[#F56A6A] font-bold"><a className="m-8">Learn More</a></button>
                </div>
                <div className="flex mt-14 dl-3"><img src="/img/pic10.png" alt="" /></div>
            </div>
            
        )
    }
