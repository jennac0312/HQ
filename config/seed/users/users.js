const users = [
//   {
//       name: "John Smith",
//       username: "john123",
//       password: "123",
//       role: "agent",
//       rank: 7,
//       image: "https://avatars.dicebear.com/api/avataaars/john123.svg",
//       rankMessage: "I may be at the bottom of the rankings now, but watch out world, because I'm on my way to the top! With dedication and hard work, I'll prove myself as the ultimate agent!"
//   },
//   {
//       name: "Emily Johnson",
//       username: "emily456",
//       password: "123",
//       role: "agent",
//       rank: 3,
//       image: "https://avatars.dicebear.com/api/avataaars/emily456.svg",
//       rankMessage: "While my rank may not reflect it, I have the determination to rise to the occasion. Just wait and see, I'll be the agent that everyone looks up to!"
//   },
//   {
//       name: "Michael Brown",
//       username: "michael789",
//       password: "123",
//       role: "agent",
//       rank: 5,
//       image: "https://avatars.dicebear.com/api/avataaars/michael789.svg",
//       rankMessage: "Being at the bottom motivates me to climb higher and higher. I thrive on challenges and won't stop until I'm the top-ranking agent in the agency!"
//   },
//   {
//       name: "Jessica Davis",
//       username: "jessica234",
//       password: "123",
//       role: "agent",
//       rank: 2,
//       image: "https://avatars.dicebear.com/api/avataaars/jessica234.svg",
//       rankMessage: "I'm determined to prove my worth as an agent. My rank may be low now, but with hard work and perseverance, I'll rise to the top!"
//   },
//   {
//       name: "David Miller",
//       username: "david567",
//       password: "123",
//       role: "agent",
//       rank: 8,
//       image: "https://avatars.dicebear.com/api/avataaars/david567.svg",
//       rankMessage: "I may not have the highest rank yet, but I have the skills and drive to become the agency's star agent. Watch me shine!"
//   },
//   {
//       name: "Sarah Wilson",
//       username: "sarah890",
//       password: "123",
//       role: "agent",
//       rank: 4,
//       image: "https://avatars.dicebear.com/api/avataaars/sarah890.svg",
//       rankMessage: "My low rank is just a starting point. I'm committed to improving and becoming the top agent in the agency. Get ready to be amazed!"
//   },
//   {
//       name: "Robert Taylor",
//       username: "robert123",
//       password: "123",
//       role: "agent",
//       rank: 6,
//       image: "https://avatars.dicebear.com/api/avataaars/robert123.svg",
//       rankMessage: "I may be at the bottom of the rankings, but I have the determination to climb my way to the top. The journey to success starts now!"
//   },
//   {
//       name: "Linda Anderson",
//       username: "linda456",
//       password: "123",
//       role: "agent",
//       rank: 1,
//       image: "https://avatars.dicebear.com/api/avataaars/linda456.svg",
//       rankMessage: "My low rank won't hold me back. I'm on a mission to become the best agent in the agency. Get ready to witness my rise to the top!"
//   },
//   {
//       name: "William Martinez",
//       username: "william789",
//       password: "123",
//       role: "agent",
//       rank: 10,
//       image: "https://avatars.dicebear.com/api/avataaars/william789.svg",
//       rankMessage: "I may have a low rank now, but I have the determination and skills to achieve greatness. I won't stop until I'm the agency's top-performing agent!"
//   },
//   {
//       name: "Amanda Clark",
//       username: "amanda234",
//       password: "123",
//       role: "agent",
//       rank: 9,
//       image: "https://avatars.dicebear.com/api/avataaars/amanda234.svg",
//       rankMessage: "My rank is just a number, but my ambition knows no limits. I'm committed to becoming the most successful agent in the agency, and I won't rest until I achieve it!"
//   },
//   // Add 10 more unique users here
//   {
//       name: "Oliver White",
//       username: "oliver567",
//       password: "123",
//       role: "agent",
//       rank: 4,
//       image: "https://avatars.dicebear.com/api/avataaars/oliver567.svg",
//       rankMessage: "I'm making steady progress in the ranks. With determination and focus, I'll continue to climb and achieve great success as an agent."
//   },
//   {
//       name: "Sophia Garcia",
//       username: "sophia234",
//       password: "123",
//       role: "agent",
//       rank: 7,
//       image: "https://avatars.dicebear.com/api/avataaars/sophia234.svg",
//       rankMessage: "I'm steadily moving up the ranks, and I'm not stopping anytime soon. I have my eyes set on becoming one of the top agents in the agency."
//   },
//   {
//       name: "Ethan Wilson",
//       username: "ethan789",
//       password: "123",
//       role: "agent",
//       rank: 3,
//       image: "https://avatars.dicebear.com/api/avataaars/ethan789.svg",
//       rankMessage: "I'm on my way up the ranks, and I'm excited about the journey ahead. I believe that hard work and determination will lead me to success."
//   },
//   {
//       name: "Isabella Davis",
//       username: "isabella123",
//       password: "123",
//       role: "agent",
//       rank: 6,
//       image: "https://avatars.dicebear.com/api/avataaars/isabella123.svg",
//       rankMessage: "I'm steadily climbing the ranks, and I'm not looking back. I'm determined to be one of the agency's top-performing agents."
//   },
//   {
//       name: "James Brown",
//       username: "james567",
//       password: "123",
//       role: "agent",
//       rank: 2,
//       image: "https://avatars.dicebear.com/api/avataaars/james567.svg",
//       rankMessage: "I may be at a lower rank now, but I have big dreams and the determination to achieve them. I'm working hard to improve my skills and climb the ranks."
//   },
//   {
//       name: "Charlotte Smith",
//       username: "charlotte890",
//       password: "123",
//       role: "agent",
//       rank: 5,
//       image: "https://avatars.dicebear.com/api/avataaars/charlotte890.svg",
//       rankMessage: "I'm making progress in my career as an agent, and I'm determined to reach the top. My commitment and dedication will lead me to success."
//   },
//   {
//       name: "Lucas Johnson",
//       username: "lucas234",
//       password: "123",
//       role: "agent",
//       rank: 8,
//       image: "https://avatars.dicebear.com/api/avataaars/lucas234.svg",
//       rankMessage: "I'm on a mission to become one of the agency's top agents, and I won't stop until I achieve that goal. I'm driven by excellence and success."
//   },
//   {
//       name: "Mia Martinez",
//       username: "mia567",
//       password: "123",
//       role: "agent",
//       rank: 9,
//       image: "https://avatars.dicebear.com/api/avataaars/mia567.svg",
//       rankMessage: "I'm climbing the ranks with determination and hard work. My goal is to become one of the agency's top agents, and I'm on the right path."
//   },
//   {
//       name: "Benjamin Taylor",
//       username: "benjamin123",
//       password: "123",
//       role: "agent",
//       rank: 1,
//       image: "https://avatars.dicebear.com/api/avataaars/benjamin123.svg",
//       rankMessage: "I may be starting at the bottom, but I'm determined to rise to the top. I'm putting in the effort and learning every day to achieve my goals."
//   },
    {
      name: "Michael Scott",
      username: "michael.scott",
      password: "123",
      rankMessage: "That's what she said.",
      rank: 7,
      image: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png"
    },
    {
      name: "Jim Halpert",
      username: "jim.halpert",
      password: "123",
      rankMessage: "Bears. Beets. Battlestar Galactica.",
      rank: 8,
      image: "https://i.pinimg.com/280x280_RS/17/ef/cd/17efcd111e628314a69d30218b2d6587.jpg"
    },
    {
      name: "Pam Beesly",
      username: "pam.beesly",
      password: "123",
      rankMessage: "I'm going to be engaged to somebody for a very long time.",
      rank: 6,
      image: "https://i.pinimg.com/474x/b4/37/0b/b4370be92a23d01d414d94983c2fb925.jpg"
    },
    {
      name: "Dwight Schrute",
      username: "dwight.schrute",
      password: "123",
      rankMessage: "Bears do not... What is going on? Bears do not... What is going on?!",
      rank: 9,
      image: "https://theofficeanalytics.files.wordpress.com/2017/11/dwight.jpeg?w=1200"
    },
    {
      name: "Ryan Howard",
      username: "ryan.howard",
      password: "123",
      rankMessage: "I went to business school. I'm not an idiot.",
      rank: 4,
      image: "https://openpsychometrics.org/tests/characters/test-resources/pics/TO/5.jpg"
    },
    {
      name: "Andy Bernard",
      username: "andy.bernard",
      password: "123",
      rankMessage: "I have a mess of paper on my desk. I don't even know where my desk is.",
      rank: 7,
      image: "https://media.licdn.com/dms/image/C4D03AQFUinvFG-UBPA/profile-displayphoto-shrink_800_800/0/1661522982142?e=2147483647&v=beta&t=r4KOJaLXlyBxGHDqMfCBG67d_dXPFK83RZ8k76RSZes"
    },
    {
      name: "Angela Martin",
      username: "angela.martin",
      password: "123",
      rankMessage: "I don't want to have a baby until I'm sure my baby will have someone who will be with him forever.",
      rank: 5,
      image: "https://pbs.twimg.com/profile_images/2138784063/2DP6cfc3_400x400"
    },
    {
      name: "Kevin Malone",
      username: "kevin.malone",
      password: "123",
      rankMessage: "Why waste time say lot word when few word do trick?",
      rank: 6,
      image: "https://pbs.twimg.com/profile_images/578770913509924864/vSPMPHgE_400x400.jpeg"
    }  
];

module.exports = users

