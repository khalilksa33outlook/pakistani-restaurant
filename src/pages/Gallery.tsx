const Gallery = () => {
  return (
    <div className="container py-12 animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mb-12">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} className="aspect-square bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;