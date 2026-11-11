// Edit these sample articles or add your own posts in this file.
const posts = [
  {
    id: 1, category: "Core CS", date: "November 2026", readTime: "5 min read",
    title: "Computer Networks: Understanding the Basics",
    excerpt: "A beginner-friendly look at how devices communicate, and why network layers make the internet work.",
    art: "network", symbol: "↗", artLabel: "CONNECT · COMMUNICATE",
    content: `
      <p>Every time we open a website, send a message or stream a video, data travels between devices. Computer networks make this communication possible. In this article, I am sharing the basic ideas I am learning as a Computer Science and Engineering student.</p>
      <h3>What is a computer network?</h3>
      <p>A computer network is a group of two or more connected devices that can exchange information and share resources. Devices may be connected using cables, Wi-Fi or other communication technologies.</p>
      <h3>Why do we use layers?</h3>
      <p>Network communication has many tasks: preparing data, identifying devices, choosing a route and transmitting bits. A layered architecture divides these tasks into manageable parts. Each layer has a specific responsibility and communicates with the layers around it.</p>
      <div class="callout"><strong>Remember:</strong> Layering makes network design easier to understand, develop, troubleshoot and maintain.</div>
      <h3>OSI model at a glance</h3>
      <div class="table-wrap"><table><tr><th>Layer</th><th>Main idea</th></tr><tr><td>Application</td><td>Services used by applications</td></tr><tr><td>Presentation</td><td>Data format, encryption and compression</td></tr><tr><td>Session</td><td>Managing communication sessions</td></tr><tr><td>Transport</td><td>End-to-end delivery</td></tr><tr><td>Network</td><td>Logical addressing and routing</td></tr><tr><td>Data Link</td><td>Frames and local delivery</td></tr><tr><td>Physical</td><td>Transmission of bits</td></tr></table></div>
      <h3>What I learned</h3>
      <p>The main takeaway for me is that sending data is not a single action. Different layers work together, and understanding their responsibilities helps when studying protocols and troubleshooting network problems.</p>
      <p><em>Note: This is a student learning summary. Refer to your prescribed textbook and class notes for the complete syllabus explanation.</em></p>`
  },
  {
    id: 2, category: "Programming", date: "November 2026", readTime: "4 min read",
    title: "Java OOP: Four Concepts to Know",
    excerpt: "Breaking down encapsulation, inheritance, polymorphism and abstraction with simple examples.",
    art: "java", symbol: "{ }", artLabel: "THINK · WRITE · RUN",
    content: `
      <p>Object-Oriented Programming (OOP) is a programming approach that organizes code around objects and classes. Java is widely used to learn OOP because it supports classes, objects and the four commonly taught OOP concepts.</p>
      <h3>1. Encapsulation</h3><p>Encapsulation combines data and the methods that operate on that data inside a class. Access modifiers help control how the data is accessed.</p>
      <h3>2. Inheritance</h3><p>Inheritance allows one class to acquire accessible properties and methods from another class. It can help reduce repeated code.</p>
      <pre><code>class Animal {\n  void eat() {\n    System.out.println("Eating");\n  }\n}\nclass Dog extends Animal {\n  void bark() {\n    System.out.println("Barking");\n  }\n}</code></pre>
      <h3>3. Polymorphism</h3><p>Polymorphism means one interface or method name can represent different behaviours. Method overloading and method overriding are common examples in Java.</p>
      <h3>4. Abstraction</h3><p>Abstraction focuses on essential features and hides implementation details. Java supports abstraction through abstract classes and interfaces.</p>
      <div class="callout"><strong>Study tip:</strong> For each concept, learn the definition, syntax and one small program. Practising code makes the differences easier to remember.</div>
      <h3>My takeaway</h3><p>These four concepts are connected, but they solve different design problems. Writing small Java programs is a useful way to understand when and why each concept is used.</p>`
  },
  {
    id: 3, category: "Student Life", date: "November 2026", readTime: "3 min read",
    title: "How I Organise a Busy Engineering Semester",
    excerpt: "A realistic approach to balancing lectures, lab work, assignments, revision and personal projects.",
    art: "study", symbol: "✳", artLabel: "PLAN · PRACTISE · REPEAT",
    content: `
      <p>An engineering semester can feel busy because lectures, practical sessions, assignments, tests and project work often happen together. I am trying to use a simple system to stay organised without making a timetable that is impossible to follow.</p>
      <h3>Start with a weekly overview</h3><p>At the beginning of each week, I list deadlines, lab submissions, tests and important topics. I mark the tasks that need attention first instead of trying to do everything at once.</p>
      <h3>Use short focused study sessions</h3><p>I divide a large topic into smaller sections. A focused session can be used to understand one concept, solve a few questions or revise one set of notes. Short breaks help me return with better concentration.</p>
      <h3>Make practical work a priority</h3><p>For programming subjects, I try to write and run the code instead of only reading it. For theory subjects, I use diagrams, short notes and practice questions to check my understanding.</p>
      <h3>Review and adjust</h3><p>At the end of the week, I check what I completed and move unfinished tasks to a realistic time. A plan should help me, not make me feel guilty when something changes.</p>
      <div class="callout"><strong>My reminder:</strong> Consistency is more useful than trying to study everything in one night. Small progress every day adds up.</div>
      <p>This is the routine I am experimenting with. Every student can adjust it to their own timetable, learning style and responsibilities.</p>`
  }
];