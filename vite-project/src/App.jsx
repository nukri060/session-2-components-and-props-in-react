import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Post from "./components/Post";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="features">
          <h2>Why Choose Us?</h2>

          <Feature
            title="Community Driven"
            paragraph="Get support, share tips, and build together with thousands of developers."
          />
          <Feature
            title="Learning Resources"
            paragraph="Access curated tutorials, challenges, and projects to boost your skills."
          />
          <Feature
            title="Job Board"
            paragraph="Explore developer jobs and freelance gigs tailored to your stack."
          />
        </section>

        {/* Blog Posts */}
        <section className="blog">
          <h2>Latest Articles</h2>

          <Post
            title="Mastering React Components"
            paragraph="Components are the heart of React apps. Learn how to structure, style, and optimize them."
            author="Sarah Dev"
          />
          <Post
            title="Using Props Like a Pro"
            paragraph="Make your React components reusable and dynamic with props and destructuring."
            author="John Code"
          />
          <Post
            title="Understanding State and Effects"
            paragraph="Learn the fundamentals of useState and useEffect with real-life examples."
            author="Lina Hooks"
          />
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Developers Say</h2>

          <Testimonial
            src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
            alt="User 1"
            quote="DevConnect helped me land my first remote React job!"
            author="Alex Frontend"
          />
          <Testimonial
            src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
            alt="User 2"
            quote="The tutorials and challenges here are better than most courses I've paid for."
            author="Maria JS"
          />
        </section>

        {/* Sidebar/About */}
        <aside className="sidebar">
          <h2>About DevConnect</h2>
          <img
            src="https://avatars.githubusercontent.com/u/98865593?s=280&v=4"
            alt="DevConnect Logo"
          />
          <p>We are a global platform built for developers, by developers.</p>
          <p>
            Join our mission to make tech education and networking accessible to
            everyone.
          </p>
        </aside>
      </main>

      <footer>
        <p>&copy; 2025 DevConnect. All rights reserved.</p>
        <nav>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;