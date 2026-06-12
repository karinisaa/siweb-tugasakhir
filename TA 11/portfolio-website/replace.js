const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

// 1. Replace violet with pink in all src files
walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace violet with pink
    content = content.replace(/violet/g, 'pink');
    
    // 2. Change "Karin.dev" to "Karinissa" in Navbar and Footer
    content = content.replace(/Karin<span className="text-pink-400">\.<\/span>dev/g, 'Karin<span className="text-pink-400">issa<\/span>');
    
    // 3. Update Footer bio
    if (filePath.includes('Footer.jsx')) {
      content = content.replace(
        /Full Stack Developer passionate about creating beautiful and\s+functional web applications with modern technologies\./g,
        'System Analyst & Frontend Developer yang antusias dalam menciptakan solusi sistem yang efektif dan aplikasi web fungsional dengan teknologi modern.'
      );
    }
    
    // 4. Update CSS custom scrollbar hover color
    if (filePath.includes('globals.css')) {
      content = content.replace(/#6d28d9/g, '#db2777'); // pink-600
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

// 5. Fix seed.js missing githubUrl
const seedPath = path.join(__dirname, 'prisma', 'seed.js');
let seedContent = fs.readFileSync(seedPath, 'utf8');
seedContent = seedContent.replace(/techStack: "Risk Analysis, Business Process, Microsoft Office",\s+demoUrl: "#",/g, 'techStack: "Risk Analysis, Business Process, Microsoft Office",\n    githubUrl: "#",\n    demoUrl: "#",');
seedContent = seedContent.replace(/techStack: "ERP, Gap Analysis, Blueprinting, UML",\s+demoUrl: "#",/g, 'techStack: "ERP, Gap Analysis, Blueprinting, UML",\n    githubUrl: "#",\n    demoUrl: "#",');
fs.writeFileSync(seedPath, seedContent, 'utf8');

console.log("Replacements complete.");
