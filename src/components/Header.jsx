

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-gray-950 shadow-md flex items-center py-4 px-6 z-50 mb-6'>
      <div className='text-center w-full'>
        <h1 className='text-2xl font-bold text-indigo-600'>
          Notes / Task Manager
        </h1>
        <p className='text-sm text-zinc-200'>
          Stay organized and boost productivity
        </p>
      </div>
    </header>
  );
};

export default Header;
