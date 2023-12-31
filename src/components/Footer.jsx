import "../styling/footer.css"
export const Footer = () => {

  return (
    <footer>

      <p>Project created by:</p>

      <div className="github-links">
        <div>
          <a href="https://github.com/VAstrom" target="_blank" rel="noopener noreferrer"><img src="./icons8-github.png" alt="Github icon" /> Veronica Åström </a>
          <a href="https://github.com/catfooo" target="_blank" rel="noopener noreferrer"><img src="./icons8-github.png" alt="Github icon" /> So Youn Choi </a>
        </div>

        <div>
          <a href="https://github.com/MikoZhu" target="_blank" rel="noopener noreferrer"><img src="./icons8-github.png" alt="Github icon" /> Huadan Zhu </a>
          <a href="https://github.com/Sheryll-Ann" target="_blank" rel="noopener noreferrer"><img src="./icons8-github.png" alt="Github icon" /> Sheryll P-Cheong </a>
        </div>

      </div>
    </footer>
  )
}
