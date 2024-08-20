//src/pages/MainPage/Home/index.tsx
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-transparent via-greenBlue-oceanBlue/75 to-transparent flex flex-col justify-center items-center"
    >
      {/* Ana içerik bölümü */}
      <div className="flex flex-col items-center text-center gap-10">
        {/* Fotoğraf ve Divider ile Ana Başlık */}
        <div className="flex items-center gap-4">
          {/* Fotoğraf */}
          <img src="/me.jpeg" alt="Orhan's Avatar" className="w-64 h-64 rounded-full object-cover" />
          {/* Divider */}
          <div className="h-48 w-1 rounded-full bg-white"></div>
          {/* Ana Cümle */}
          <h1 className="text-4xl font-bold text-start">
            React TS <br />
            Developer
          </h1>
        </div>

        {/* Kısa Açıklama */}
        <p className="text-lg max-w-lg">
          I am a passionate React TypeScript developer, specializing in building highly responsive, modern web applications. My focus is on creating
          seamless user experiences through clean, scalable, and maintainable code.
        </p>

        {/* Yetenekler */}
        <div>
          <h2 className="text-2xl font-semibold">Technologies I Use</h2>
          <p className="text-lg">React, TypeScript, Tailwind, Redux, React-Router</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
