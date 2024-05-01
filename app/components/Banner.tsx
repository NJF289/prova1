export default function Banner() {
    return (
        <div className=" mt-4 border-t-4 border-[red]  grid-cols-2 md:grid">
            <div className=" mt-10 dl-3"><img src="/img/pic10.png" alt="" /></div>
            
            <div className="text-left md:ml-5"> 
                <h1 className=" font-bold mt-10" >Hi, I’m Teacher by UTFPR</h1>
                <h3 className=" mt-3 text-[#7F888F] ">A free and fully responsive site template</h3>
                <p className=" mt-5 text-[#7F888F]">Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <button className="btn border-4 border-red-500 rounded-lg mt-3 text-[red] font-bold ; ">Learn More</button>
            </div>
        </div>
        
    )
}