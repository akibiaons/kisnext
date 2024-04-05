export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h1>
          The body of the website below will be a billboard for a hero section
        </h1>
        {/* The background image for the hero section */}
        <div className="bg-[url('/path/to/your/image.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center text-white">
          <div className="text-center">
            <h2>Keep it Safe California</h2>
            <p>High quality American Security & Cannon Safes</p>
            <a href=""></a>
          </div>
        </div>
      </div>
    </>
  );
}
