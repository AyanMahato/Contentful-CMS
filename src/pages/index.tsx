import { GetServerSideProps } from 'next'

const Home = () => null

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/en/eco-nova', // or any default slug
      permanent: false,
    },
  }
}

export default Home
