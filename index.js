const opportunities = [
  {
    id: 1,
    job: "Computer Engineers",
    link: "https://en.wikipedia.org/wiki/Computer_engineering",
    description:
      "Computer engineers work with the hardware and software aspects of systems design and development. They often work as part of a team that designs new computing devices or  computer-related equipment. Computer hardware engineers usually design, develop, test, and supervise the manufacture of computer hardware—such as chips or device controllers. ",
  },
  {
    id: 2,
    job: "Network Specialitst",
    link: "https://www.betterteam.com/network-specialist-job-description",
    description:
      "The rapid spread of computer networks has resulted in the increase of requirement of specialists responsible for the security and administration of the networks they design and implement systems that keep networks functioning smoothly. Their Duties may be planning and installation of the hardware and software that comprise the network, addition – deletion of files to the network server, maintaining the peripherals connected to the network, troubleshooting problems",
  },
  {
    id: 3,
    job: "Computer Programmers",
    link: "https://www.computerscience.org/careers/computer-programmer/",
    description:
      "Computer Programmers Computer programmers write, test, and maintain the programs or software. They also conceive, design, and test logical structures for solving problems by computer. ",
  },
  {
    id: 4,
    job: "Database Administrators",
    link: "https://en.wikipedia.org/wiki/Database_administrator",
    description:
      "They are the keepers of database accuracy, efficiency, maintenance and development. The DBA function requires Database Planning, requirements gathering and conceptual design, logical design and transaction design, physical design and implementation, testing and debugging. Database operations and maintenance, installation, conversion and migration, training and support are also their work activities.",
  },
  {
    id: 5,
    job: "Interface Designer",
    link: "https://kenzie.snhu.edu/blog/what-does-a-ui-designer-actually-do/",
    description:
      "Human-computer interaction is a relatively upcoming field in computer science, which deals with ergonomic and interface details in computing. Interface designers design the user interface of a computer system, the communication system between the user and the computer, what you see on the computer screen while using a program and, how a user is led through a program or process.",
  },
];

var cardContainer = document.querySelector(".card__container");

opportunities.forEach((opportunity) => {
  const { id, job, link, description } = opportunity;
  var newOpportunity = document.createElement("div");
  newOpportunity.classList.add("card");
  var innerContent = document.createElement("div");
  innerContent.classList.add("card__content");
  newOpportunity.appendChild(innerContent);
  var header = document.createElement("h3");
  header.classList.add("card__header");
  header.innerHTML = job;
  innerContent.appendChild(header);
  var desc = document.createElement("p");
  desc.classList.add("card__info");
  desc.innerHTML = description;
  innerContent.appendChild(desc);
  var btn = document.createElement("a");
  btn.href = link;
  btn.classList.add("card__button");
  btn.innerHTML = "Read Now";
  innerContent.appendChild(btn);
  cardContainer.appendChild(newOpportunity);
});
