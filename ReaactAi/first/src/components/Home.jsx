import Form from "./Form"

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-[100px] mt-20">
      <div className="w-full h-fit rounded-md p-3 bg-white
      border border-black flex items-center justify-center">
        <Form/>
      </div>
      
    </div>
  )
}

export default Home