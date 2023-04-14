import './page.css'

function Page(props: {state: number}) {

  return (
    <div>
      <div className="page">
        <h1 className="title-solid">About Me</h1>

        <div className="line">ㅤ</div>

        <div className="text-container">
          <p className="text small flat">
            Hello dear visitor, I'm a dutch software development student who has been happily coding for a few years now
          </p>
          <p className="empty"></p>
        </div>

        <div className="text-container">
          <p className="empty"></p>
          <p className="text small flat">
            I love math, and I love some good use of math in my programs. I am definitely not afraid of some challenging functionality. 
            Ever since I first started coding I was just comming up with funky math problems to solve using my extremely little coding knowledge. Great memories, but don't worry I've grown a lot since then
          </p>
        </div>

        <div className="text-container">
          <p className="text small flat">
            The past few years I've worked on several projects for my study, ranging from simple C# console applications to software for large businesses. 
            During this time I've worked with several different languages and design principals that have greatly improved my overall capabilities
          </p>
          <p className="empty"></p>
        </div>

        <div className="text-container">
          <p className="empty"></p>
          <p className="text small flat">
            Of course I'm still very much eager to continue my journey and learn new exciting things along the way.
            Noone is ever really done learning
          </p>
        </div>

      </div>
    </div>
  )
}

export default Page  