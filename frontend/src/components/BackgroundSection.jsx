const BackgroundSection = ({ children, title }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-8 md:px-24"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D')` }} // Update image path
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> 
      <div className="relative z-10 max-w-lg text-white ">
        <h1 className="text-4xl m-10 md:text-4xl font-semibold leading-tight">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default BackgroundSection;
