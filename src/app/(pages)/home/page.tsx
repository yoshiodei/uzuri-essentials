import InfoCarousel from './components/InfoCarousel';
import Categories from './components/Categories';
import SearchInput from '../../components/SearchInput';

export default function Home() {
  return (
    <main className="min-h-[80vh] p-[15px] lg:p-8">
      <InfoCarousel />
      <SearchInput />
      <Categories />
    </main>
  );
}