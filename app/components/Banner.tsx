export default function Banner() {
    return (
        <div className="mt-4 border-t-4 border-[#F56A6A] grid-cols-2 md:grid">
            <div className="md:mr-2"> 
                <h1 className=" text-[20px] font-bold mt-10 md:text-[40px]">Hi, I'm Teacher by UTFPR</h1>
                <h3 className=" mt-3 text-[#7F888F] invisible md:visible">A free and fully responsive site template</h3>
                <p className=" mt-5 text-[#7F888F]">Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <button className="btn invisible md:visible mt-6 md:border-2 md:border-[#F56A6A] md:rounded-[4px] md:text-[#F56A6A] font-bold ; "><a className="m-8">Learn More</a></button>
            </div>
            <div className=" mt-14 dl-3"><img src="/img/pic10.png" alt="" /></div>
        </div>
        
    )
}