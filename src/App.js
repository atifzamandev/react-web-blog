
import Header from './components/header';
import Services from './components/services';
import Slider from './components/slider';
import Seprate from './components/seprate';
import Partners from './components/partners';
import BlogPosts from './components/blogposts';
import ContactForm from './components/contactform';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header title = 'React Web Blog'/>
      <Slider />
      <Services />
      <Seprate />
      <Partners />
      <Seprate />
      <BlogPosts blogimage={"https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"}/>
      <BlogPosts blogimage={"https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"}/>
      <BlogPosts blogimage={"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"}/>
      <BlogPosts blogimage={"https://images.unsplash.com/photo-1550327149-f5aef60d38f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"}/>
      <Seprate />
      <ContactForm />
      <Footer />
    </div>
  );
}



export default App;
