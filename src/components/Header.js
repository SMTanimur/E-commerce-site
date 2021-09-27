import Link from 'next/link';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme("light");

  const ThemeChanger = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className=' py-3 px-6 bg-blue-500 dark:bg-gray-700 dark:text-white flex justify-between items-center'>
      <div className=''>
        <Link href='/'>
          <a className='text-2xl text-white font-bold hover:underline'>
            Amazona
          </a>
        </Link>
      </div>

      <div className='flex space-x-3 text-lg text-white justify-center items-center '>
            <input
              type='checkbox'
              className='toggle toggle-primary'
              checked={theme === "dark"&& "checked" }
              onChange={ThemeChanger}
            />
        <Link href='/cart'>
          <a className='hover:underline'>Cart</a>
        </Link>
        <Link href='/Log In'>
          <a className='hover:underline'>Log In</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
