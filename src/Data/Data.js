import {
  Beaker,
  Zap,
  BrainCircuit as Circuit,
  Star,
  ArrowRight,
} from "lucide-react";
import bg1 from "../Images/banners/DIGI SIMU 5.jpg";
import bg2 from "../Images/banners/DIGI SIMU.jpg";
import bg3 from "../Images/banners/DIGI SIMU1.jpg";
import bg4 from "../Images/banners/DIGI SIMU1.jpg";
import bg5 from "../Images/banners/DIGI SIMU 16.jpg";
import bg6 from "../Images/banners/DIGI SIMU.jpg";

export const Data = [
  {
    id: 1,
    title: "DNA Extraction",
    description:
      "Biology | Molecular Biology | Biochemistry | Genetics | Microbiology",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    icon: Beaker,
    banner: bg1,
    module3D: null,
    // module3D: "/DNA.glb",
    Postion: [0, 0, 0],
    category: "Chemistry",
    difficulty: "Intermediate",
    sec1h: "Importance of DNA Extraction",
    sec1t:
      "DNA, or Deoxyribonucleic Acid, is the genetic material present in all living organisms. It carries the instructions needed for an organism’s growth, development, functioning, and reproduction. Structurally, DNA is made up of two strands twisted into a double helix, with each strand composed of nucleotides containing a sugar, phosphate group, and a nitrogen base. The four bases—Adenine (A), Thymine (T), Cytosine (C), and Guanine (G)—pair specifically (A with T, C with G) to form the rungs of the DNA ladder. These sequences of bases make up genes, which serve as codes for building proteins that perform vital roles in the body. DNA is found primarily in the nucleus of eukaryotic cells and is passed from parents to offspring, carrying hereditary traits. It plays a crucial role in genetics, forensic science, disease research, and biotechnology. Understanding DNA helps scientists decode the blueprint of life and develop treatments for genetic disorders.",
    sec2h: "DNA Extraction Experiment Method",
    sec2t: `Structure: DNA is made up of two long strands forming a double helix. These strands are composed of smaller units called nucleotides.

Nucleotides contain:

A sugar (deoxyribose),

A phosphate group,

One of four nitrogen bases:

Adenine (A)

Thymine (T)

Cytosine (C)

Guanine (G)

A always pairs with T, and C with G.

Function: DNA contains instructions for making proteins, which are essential for body functions. These instructions are coded in the sequence of the nitrogen bases.

Location: In eukaryotic cells, DNA is mostly found in the nucleus, while in prokaryotic cells, it is found in the cytoplasm.

Importance: DNA determines traits passed from parents to offspring and is used in fields like genetics, forensic science, biotechnology, and medicine.

Would you like a visual explanation or real-world example (like forensic use or DNA testing)?`,
    sec3h: "DNA Extraction Virtual Lab - Learning Objectives for Students",
    sec3t:
      "Demonstrate proficiency with the protocol involved in DNA extraction. Identify the role of specific reagents and equipment in the DNA extraction virtual lab. Practice basic laboratory techniques. Conclude downstream applications of DNA extraction.",
    sec4h: "DNA Extraction Virtual Lab & Theoretical Background to Know",
    sec4t:
      "DNA (deoxyribonucleic acid) is a complex molecule that contains the genetic material of a cell. It defines the structure and the functions of a living organism. DNA is also responsible for heredity. DNA is composed of a series of nucleotides linked together. These nucleotides are basically made of a nitrogenous base, a molecule of sugar (deoxyribose), and a phosphate group. The sequence of nucleotides in the DNA molecule determines the hereditary traits of a cell. Nucleotides are packed to fit inside the cell. DNA takes the shape of a double helix, which, in addition to the DNA molecule contains bound proteins. DNA double helix is enclosed inside a cell membrane in case the cell doesn’t have a nucleus like in prokaryotes, and inside the nuclear membrane in cells with nuclei like in eukaryotes. DNA has been the target of a lot of research. Investigation of the DNA structure and sequence in relation to diseases helped in finding out the molecular basis and cure for various diseases. DNA study also allowed the production of many vaccines, hormones, and enzymes. DNA study was also very beneficial in the forensic/medico-legal entities. To study DNA it must be extracted out of the cell, Hence; the DNA extraction technique is widely used in research labs. The isolation of the DNA is done in stages: Cell dissolution: In this stage, the cell and the nucleus are broken to extract a DNA sample using a lysis buffer. Precipitation: In this stage, proteins and impurities are removed from the sample. Purification: This stage involves isolating the DNA completely from the other substances, for a final eluted pure DNA sample preserved in a buffer. What Is DNA Extraction Principle of Work? The extraction of DNA involves lysis of cellular and nuclear membranes to extract DNA from within. This is followed by the separation of DNA from impurities, proteins, and other substances. DNA extraction usually proceeds through three stages: Cell dissolution: where the cell and the nucleus are broken to extract DNA into the buffer. Precipitation: where proteins and impurities are removed from the sample. Purification: This final stage involves further purification of DNA to get a completely pure DNA sample ready to be used for downstream applications.",
  },
  {
    id: 2,
    title: "Physics Pendulum Simulator",
    description:
      "Biology | Molecular Biology | Biochemistry | Genetics | Microbiology",
    image:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    icon: Zap,
    banner: bg2,

    module3D: null,
    // module3D: "/decoration.glb",
    position: [0, 0, 0],
    category: "Physics",
    difficulty: "Advanced",

    sec1h: "Understanding Pendulum Motion",
    sec1t: `Pendulum motion refers to the swinging movement of an object (called the bob) that is suspended from a fixed point and allowed to move freely under the influence of gravity.

When you pull the bob to one side and release it, it swings back and forth in a regular, repeating path. This is known as oscillatory or periodic motion because it repeats at regular intervals.`,

    sec2h: "Pendulum Experiment Setup",
    sec2t: `Step-by-step guide to setting up a pendulum simulation:

1. **Fix the support:**  
Attach the stand firmly to a table so it doesn’t shake.

2. **Attach the string:**  
Tie one end of the string to the fixed support (like a clamp or nail on a stand).

3. **Add the bob:**  
Tie the bob to the other end of the string. The string should be taut and the bob should hang freely without touching the ground.

4. **Measure the length:**  
Measure the length from the point of suspension to the center of the bob.

5. **Mark the rest position:**  
Let the bob hang still and mark this position as the center or equilibrium point.

6. **Displace the bob:**  
Pull the bob to one side (not more than 15–20°) and release it gently—don’t push it.

7. **Start the stopwatch:**  
As soon as you release the bob, start timing and count the number of oscillations.

8. **Record time for multiple oscillations:**  
Note the time for 10, 20, or 30 oscillations and calculate the average time period (T = total time / number of oscillations).`,

    sec3h: "Learning Objectives",
    sec3t: `Understand the relationship between pendulum length and time period.
Explore the role of gravity in pendulum motion.`,

    sec4h: "Theoretical Background",
    sec4t: "Pendulums are often used to study harmonic motion in physics...",
  },
  {
    id: 3,
    title: "Circuit Design Simulator",
    description:
      "Biology | Molecular Biology | Biochemistry | Genetics | Microbiology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    icon: Circuit,
    banner: bg3,
    module3D: null,
    // module3D: "/magnet.glb",
    Postion: [0, 0, 0],
    category: "Electronics",
    difficulty: "Beginner",
    sec1h: "Introduction to Circuit Design",
    sec1t:
      "A DC motor is an electric motor that runs on direct current (DC) electricity. It works by converting electrical energy into mechanical energy using electromagnetic principles. When current flows through the motor’s armature (coil), it creates a magnetic field. This field interacts with the magnetic field of permanent magnets or field windings inside the motor. The interaction produces a force that causes the armature to rotate. A commutator switches the direction of current in the coil, ensuring continuous rotation. The rotating shaft can then drive fans, wheels, or gears. DC motors are commonly used in toys, tools, and small appliances for their simplicity and speed control.",
    sec2h: "Simulation Techniques",
    sec2t: ` Working of a DC Motor – Step by Step
Connect the battery:
A DC power source (like a 9V battery) is connected to the motor terminals.

Current flows to the armature:
The current enters the armature (a coil of wire wrapped on a soft iron core).

Magnetic field is created:
The flowing current creates an electromagnetic field around the armature.

Interaction with permanent magnets:
The armature is placed between two permanent magnets (North and South poles).
The electromagnetic field of the armature interacts with the magnetic field of these magnets.

Armature starts to rotate:
Due to the Lorentz force, the armature experiences a force and starts to rotate.

Commutator changes current direction:
A split-ring commutator reverses the current in the coil every half turn, ensuring continuous rotation in the same direction.

Brushes maintain contact:
Carbon brushes rest on the commutator and maintain current flow without tangling wires.

Mechanical motion is generated:
The rotating shaft can now be used to turn wheels, fans, or gears, completing the conversion of electrical energy into mechanical energy.`,
    sec3h: "Learning Goals",
    sec3t:
      "Familiarize with basic electronic components. Practice creating functional circuits.",
    sec4h: "Understanding Circuits",
    sec4t:
      "Circuit design involves combining components like resistors and capacitors to perform specific tasks...",
  },
  {
    id: 4,
    title: "Molecular Structure Viewer",
    description:
      "Biology | Molecular Biology | Biochemistry | Genetics | Microbiology",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    icon: Beaker,
    category: "Chemistry",
    difficulty: "Advanced",
    banner: bg4,
    module3D: null,
    // module3D: "/molecular_signaling_of_osteoporosis.glb",
    Postion: [0, 0, 0],
    sec1h: "Exploring Molecular Structures",
    sec1t: "Visualize complex molecular structures in 3D.",
    sec2h: "Viewer Features",
    sec2t: "Rotate, zoom, and analyze molecular structures.",
    sec3h: "Learning Objectives",
    sec3t: "Gain insights into molecular bonding and shapes.",
    sec4h: "Background Knowledge",
    sec4t:
      "Understanding molecular geometry is critical in fields like drug design and materials science...",
  },
  {
    id: 5,
    title: "Wave Motion Simulator",
    description:
      "Biology | Molecular Biology | Biochemistry | Genetics | Microbiology",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    icon: Zap,
    banner: bg5,
    category: "Physics",
    module3D: null,
    // module3D: "/3_chemistry_dangerous_-_3december2019.glb",
    Postion: [0, 0, 0],
    difficulty: "Intermediate",
    sec1h: "Introduction to Wave Motion",
    sec1t: "Understand the basics of wave motion in physics.",
    sec2h: "Simulating Wave Motion",
    sec2t: "Create and visualize wave patterns.",
    sec3h: "Learning Goals",
    sec3t: "Explore properties of waves such as frequency and amplitude.",
    sec4h: "Theoretical Insights",
    sec4t: "Wave motion describes the transfer of energy through a medium...",
  },
  {
    id: 6,
    title: "Digital Logic Simulator",
    description:
      "Biology | Molecular Biology | Biochemistry | Genetics | Microbiology",
    image:
      "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    icon: Circuit,
    banner: bg6,
    category: "Electronics",
    module3D: null,
    // module3D: "/3_chemistry_dangerous_-_3december2019.glb",
    Postion: [0, 0, 0],
    difficulty: "Advanced",
    sec1h: "Basics of Digital Logic",
    sec1t: "Learn about binary systems and logic gates.",
    sec2h: "Simulation Tools",
    sec2t: "Using software to simulate logic circuits.",
    sec3h: "Learning Outcomes",
    sec3t:
      "Understand how digital circuits work. Build and test simple logic gates.",
    sec4h: "Fundamentals of Logic Design",
    sec4t:
      "Digital logic involves the use of binary numbers to represent logical states...",
  },
];



export const Biology_Data = [
  {
    id: 1,
    title: "Photosynthesis in Leaves",
    description: "Biology | Plants | Light | Nutrition",
    image:
      "https://c02.purpledshub.com/uploads/sites/41/2019/03/GettyImages-658291850-c811524.jpg?w=940&webp=1",
    // icon: Beaker,
    banner: bg1,
    EmbedeModule: "",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Plant Biology",
    difficulty: "Beginner",
    sec1h: "What is Photosynthesis?",
    sec1t:
      "Photosynthesis is the natural process by which green plants use sunlight, carbon dioxide from the air, and water from the soil to produce their own food in the form of glucose, releasing oxygen as a byproduct. It occurs primarily in the leaves where chlorophyll is present.",
    sec2h: "Simple Experiment",
    sec2t:
      "Take a green leaf from a plant and place it in boiling water for about 2 minutes to soften it. Then transfer the leaf into a test tube containing alcohol and heat it in a hot water bath until it becomes colorless (this removes the chlorophyll). Rinse the leaf with warm water to soften it again. Place the leaf on a white tile and cover it with iodine solution. If the leaf turns blue-black, it confirms the presence of starch, indicating that photosynthesis has occurred.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand the process of photosynthesis and its importance.",
      "Identify the raw materials required: sunlight, carbon dioxide, and water.",
      "Explain the role of chlorophyll and leaves in photosynthesis.",
      "Recognize the end products: glucose and oxygen.",
      "Learn how light energy is converted to chemical energy.",
      "Understand the role of photosynthesis in the food chain.",
      "Observe starch production as evidence of photosynthesis.",
      "Perform a simple experiment to test for photosynthesis.",
      "Relate photosynthesis to plant growth and oxygen production.",
      "Develop observation and analysis skills through experiments.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Photosynthesis is essential for the survival of most life on Earth. It helps plants grow, produces the oxygen we breathe, and forms the foundation of the food chain.",
  },
  // {
  //   id: 2,
  //   title: "Osmosis in Potatoes",
  //   description: "Biology | Cell | Water Movement",
  //   image: "<IMAGE_URL>",
  //   // icon: Flask,
  //   banner: bg2,
  //   module3D: "/Osmosis.glb",
  //   Postion: [0, 0, 0],
  //   category: "Cell Biology",
  //   difficulty: "Beginner",
  //   sec1h: "What is Osmosis?",
  //   sec1t:
  //     "Osmosis is the movement of water through a cell membrane from less salty to more salty solution.",
  //   sec2h: "Simple Experiment",
  //   sec2t:
  //     "Put potato pieces in plain water and salt water. See which piece becomes soft or hard.",
  //   sec3h: "Learning Objectives",
  //   sec3t:
  //     "Understand how water moves in and out of cells. Learn about solutions and balance.",
  //   sec4h: "Why It Matters",
  //   sec4t: "Osmosis helps plants absorb water and keeps cells healthy.",
  // },
  // {
  //   id: 3,
  //   title: "Testing Starch in Food",
  //   description: "Biology | Nutrition | Food Science",
  //   image: "<IMAGE_URL>",
  //   // icon: Microscope,
  //   banner: bg3,
  //   module3D: "/StarchTest.glb",
  //   Postion: [0, 0, 0],
  //   category: "Nutrition",
  //   difficulty: "Beginner",
  //   sec1h: "Why Test for Starch?",
  //   sec1t:
  //     "Starch is a type of carbohydrate found in many foods like rice and potatoes.",
  //   sec2h: "Simple Experiment",
  //   sec2t:
  //     "Put iodine on food samples. If it turns blue-black, starch is present.",
  //   sec3h: "Learning Objectives",
  //   sec3t:
  //     "Learn which foods contain energy-giving starch. Practice food testing.",
  //   sec4h: "Why It Matters",
  //   sec4t: "Helps students understand nutrients and balanced diet.",
  // },
  {
    id: 4,
    title: "Human Skeleton Model",
    description: "Biology | Human Body | Bones",
    image:
      "https://www.shutterstock.com/shutterstock/videos/3460936857/thumb/1.jpg?ip=x480",
    // icon: Beaker,
    banner: bg4,
    EmbelLink:
      "https://sketchfab.com/models/6db4f2130c544f628cb349f532d49b1b/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Anatomy",
    difficulty: "Beginner",
    sec1h: "What is the Skeleton?",
    sec1t:
      "The human skeleton is a framework of 206 bones that gives shape to our body, supports muscles, protects vital organs like the brain and heart, and enables movement through joints and muscles. It also produces blood cells in the bone marrow.",
    sec2h: "Observation",
    sec2t:
      "Take a plastic or 3D model of the human skeleton and closely observe its parts. Identify the skull that protects the brain, the ribcage that guards the heart and lungs, the spine that supports the body, and the long bones of the arms and legs. Notice how joints allow movement and how bones are connected. Compare left and right sides for symmetry. Point out bone names like femur, humerus, vertebrae, pelvis, etc. This activity helps in understanding structure and function together.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Identify major bones in the human body such as skull, spine, ribs, and limbs.",
      "Understand the function of joints and how they support movement.",
      "Recognize the protective role of bones for internal organs.",
      "Understand the skeletal structure and body symmetry.",
      "Learn how bones support muscles and body posture.",
      "Identify differences between types of bones (long, flat, irregular).",
      "Understand how bones grow and repair themselves.",
      "Explore how the skeletal system interacts with the muscular system.",
      "Recognize the role of the skeleton in producing blood cells.",
      "Foster curiosity about human anatomy and internal structure.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Bones provide the body with structure, protect important organs, enable movement, and are essential for producing blood cells and storing minerals like calcium.",
  },

  {
    id: 5,
    title: "Heart Rate After Exercise",
    description: "Biology | Human Body | Circulation",
    image:
      "https://images.stockcake.com/public/e/e/6/ee6cfba0-2263-4078-a075-3882c8f61a8e_large/anatomical-heart-illustration-stockcake.jpg",
    // icon: Microscope,
    banner: bg5,
    EmbelLink:
      "https://sketchfab.com/models/a7ee28d1db8d4ef2bcc84b8661ce17d3/embed",
    module3D: "/atrioventricular_septal_defect.glb",
    // module3D: "/Heart.glb",
    Postion: [0, 0, 0],
    category: "Physiology",
    difficulty: "Beginner",
    sec1h: "What is Heart Rate?",
    sec1t:
      "Heart rate refers to the number of times your heart beats in one minute. It increases when you are active and decreases during rest. Monitoring your heart rate helps you understand how your heart responds to physical effort and oxygen demand.",
    sec2h: "Simple Test",
    sec2t:
      "1. Sit quietly and use two fingers to find your pulse on your wrist or neck. Count the number of beats in one minute — this is your resting heart rate.\n2. Now perform a short activity such as jogging in place or running for 2 minutes.\n3. Immediately after, measure your pulse again for one full minute.\n4. Record and compare both values to observe the increase caused by exercise. This helps demonstrate how the heart responds to physical activity by pumping faster to deliver oxygen to muscles.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand what heart rate is and how to measure it.",
      "Explore how exercise affects heart rate.",
      "Recognize the importance of oxygen and blood circulation during activity.",
      "Learn to measure pulse using fingers and a timer.",
      "Compare resting and active heart rates.",
      "Understand how the circulatory system adapts to physical demand.",
      "Discuss the role of the heart in delivering nutrients and oxygen.",
      "Interpret heart rate data and trends after physical activity.",
      "Understand the relationship between fitness and heart efficiency.",
      "Promote awareness of heart health and exercise benefits.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Monitoring heart rate shows how the body adapts to exercise. It helps us understand cardiovascular health, oxygen transport, and the importance of maintaining a strong and healthy heart through regular physical activity.",
  },
  // {
  //   id: 6,
  //   title: "Leaf Structure Under Microscope",
  //   description: "Biology | Plants | Microscopy",
  //   image: "<IMAGE_URL>",
  //   // icon: Flask,
  //   banner: bg6,
  //   module3D: "/LeafMicroscope.glb",
  //   Postion: [0, 0, 0],
  //   category: "Botany",
  //   difficulty: "Beginner",
  //   sec1h: "What’s Inside a Leaf?",
  //   sec1t:
  //     "Leaves have tiny parts like veins and pores called stomata that help in photosynthesis.",
  //   sec2h: "Simple Observation",
  //   sec2t:
  //     "Take a thin leaf section, place it under a microscope, observe cells and veins.",
  //   sec3h: "Learning Objectives",
  //   sec3t:
  //     "See how plants breathe and absorb light. Learn how structure helps function.",
  //   sec4h: "Why It Matters",
  //   sec4t:
  //     "Helps students understand how leaves support plant life and oxygen production.",
  // },
  {
    id: 7,
    title: "Lung",
    description: "Biology | Human Body | Breathing",
    image:
      "https://images.theconversation.com/files/244828/original/file-20181109-116820-1oqq38v.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    // icon: Beaker,
    banner: bg6,
    module3D: null,
    EmbelLink:
      "https://sketchfab.com/models/0b132b125c66462b86d426729df14b33/embed",
    Postion: [0, 0, 0],
    category: "Physiology",
    difficulty: "Beginner",
    sec1h: "What is Lung Capacity?",
    sec1t:
      "Lung capacity refers to the total amount of air your lungs can hold during a full inhale. It varies with age, fitness, and activity level, and it plays a key role in breathing and oxygen exchange in the body.",
    sec2h: "Simple Test",
    sec2t:
      "Blow air into a balloon in one deep breath. Measure the diameter or circumference of the balloon. Repeat after a light exercise like jumping jacks for 1–2 minutes. Compare the results to observe changes in lung capacity and breathing efficiency.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand how lungs work during inhalation and exhalation.",
      "Learn about lung volume and capacity.",
      "Observe how exercise affects breathing rate and lung efficiency.",
      "Identify parts of the respiratory system (trachea, lungs, diaphragm).",
      "Explore oxygen exchange and carbon dioxide removal.",
      "Relate breathing to body energy and metabolism.",
      "Measure lung activity with simple experiments.",
      "Promote healthy habits for better lung function.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Understanding lung function helps in recognizing how exercise, pollution, and lifestyle affect breathing. It supports awareness about respiratory health and diseases like asthma or bronchitis.",
  },
  {
    id: 8,
    title: "Germination of Seeds",
    description: "Biology | Plants | Growth",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpo29-MDlD7zTfWw3FalOylvF-i-KK5mmVXA&s",
    // icon: Microscope,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/7e9031c2810c44fe8a0ffd3bf7864874/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Plant Biology",
    difficulty: "Beginner",
    sec1h: "What is Germination?",
    sec1t:
      "Germination is the biological process by which a seed begins to grow into a plant. It starts when the seed absorbs water and ends when the first root or shoot appears. Temperature, air, and moisture are essential for this process.",
    sec2h: "Simple Activity",
    sec2t:
      "Take 3–4 soaked bean seeds. Place them between moist cotton in a transparent container or ziplock bag. Keep it in a warm, lighted area. Observe daily for changes such as seed swelling, root emergence, and shoot growth. Record the timeline and stages.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand the steps in seed germination.",
      "Identify the conditions required: water, warmth, air.",
      "Recognize parts of a seed: seed coat, embryo, cotyledon.",
      "Learn the plant life cycle from seed to seedling.",
      "Observe real-time biological changes.",
      "Differentiate between germinated and non-germinated seeds.",
      "Promote observation and recording skills.",
      "Appreciate the importance of healthy soil and water.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Germination is the first step in a plant’s life. Understanding this process is crucial for farming, gardening, and food security. It connects us to how nature grows food from tiny seeds.",
  },
  {
    id: 9,
    title: "Skin",
    description: "Biology | Chemistry | pH",
    image:
      "https://askthescientists.com/wp-content/uploads/2017/08/skin-layers-1500x1250.jpg",
    // icon: Flask,
    banner: bg6,
    module3D: null,
    EmbelLink:
      "https://sketchfab.com/models/56c98c3710d94360a3481dc81aa4910f/embed",
    Postion: [0, 0, 0],
    category: "General Science",
    difficulty: "Beginner",
    sec1h: "What are Acids and Bases?",
    sec1t:
      "Acids are substances with a sour taste and a pH less than 7, like lemon juice. Bases taste bitter and feel slippery, with a pH above 7, like soap. Our skin’s natural pH plays a role in its health and defense.",
    sec2h: "Simple Experiment",
    sec2t:
      "Prepare red cabbage juice as a natural pH indicator. Test common substances like lemon juice, vinegar, baking soda, soap water, and shampoo. Observe color changes — red/pink for acids, green/blue for bases. This shows how skin products may be acidic or basic.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand the pH scale from 0 (acidic) to 14 (basic).",
      "Differentiate acids and bases with everyday examples.",
      "Use natural indicators like cabbage juice.",
      "Test and observe pH of household items.",
      "Learn why skin has a slightly acidic pH (around 5.5).",
      "Understand the role of pH in health, hygiene, and cleaning.",
      "Explore safe handling of acidic and basic substances.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Knowing about acids and bases helps in choosing skin products, cooking, and cleaning safely. It also teaches chemical safety and the importance of maintaining pH balance in our daily lives.",
  },
  {
    id: 10,
    title: "Model of Digestive System",
    description: "Biology | Human Body | Digestion",
    image:
      "https://www.carygastro.com/uploads/_1200x720_crop_center-center_100_none/Digestive-System.jpg",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/a30cbfe5ddbf4d17a8144e741e59a8bf/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is Digestion?",
    sec1t:
      "Digestion is the process by which the body breaks down food into smaller parts like nutrients and glucose, which can be absorbed and used for energy, growth, and repair. It involves various organs working in sequence.",
    sec2h: "Activity",
    sec2t:
      "Use a chart or 3D model to trace the digestive pathway: mouth (chewing), esophagus (swallowing), stomach (acid breakdown), small intestine (absorption), large intestine (waste removal). Label and describe the function of each part during a presentation or demo.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand the stages of digestion from ingestion to excretion.",
      "Identify key organs: mouth, stomach, intestines, liver.",
      "Learn the role of enzymes and acids in breaking food.",
      "Observe how nutrients are absorbed into the blood.",
      "Trace food movement through the digestive tract.",
      "Understand the importance of fiber and water.",
      "Relate digestion to energy and body function.",
      "Encourage healthy eating habits and awareness of digestion problems.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Digestion converts the food we eat into energy and nutrients. Understanding it promotes healthy habits and helps prevent issues like indigestion, constipation, or malnutrition.",
  },
  {
    id: 11,
    title: "Human Kidney Anatomy Cross Section",
    description: "Biology | Human Body | Digestion",
    image:
      "https://png.pngtree.com/png-clipart/20220730/original/pngtree-human-kidney-cross-section-illustration-sees-veins-and-arteries-used-in-png-image_8444800.png",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/0215aaf9e9a243cdafca249a979680b0/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is the Kidney?",
    sec1t:
      "The kidney is a bean-shaped organ that filters waste products and excess fluids from the blood to form urine. It also helps regulate blood pressure, electrolyte levels, and maintain the body’s internal balance. Each kidney contains millions of nephrons, which are the basic filtering units.",
    sec2h: "Activity",
    sec2t:
      "Use a labeled diagram or 3D model to trace the internal structure of a kidney: renal artery (blood in), cortex (filtration), medulla (collection), pyramids (urine flow), calyces (channels), pelvis (urine collection), ureter (urine transport). Label each part and explain its function during a group demonstration or class presentation.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand the structure and function of the kidney.",
      "Identify parts like renal cortex, medulla, pyramids, pelvis, ureter.",
      "Learn how nephrons filter blood and form urine.",
      "Trace the path of urine from blood to bladder.",
      "Observe how kidneys maintain water and salt balance.",
      "Understand the role of kidneys in waste removal and detoxification.",
      "Promote awareness of kidney health and hydration.",
      "Recognize the effects of diseases like kidney stones or infections.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "The kidneys clean the blood and form urine to remove waste. Understanding kidney structure helps promote good hydration, prevent kidney problems, and maintain overall body health.",
  },
  {
    id: 12,
    title: "Smoker's lungs VS Non-smoker's lungs",
    description: "Biology | Human Body | Digestion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_5C6Wbu5AZF20anOFtBaGNsfO5skG-fa1A&s",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/caa644e727484571b6dcc1556a44e8d4/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is the Difference Between Smoker’s and Non-Smoker’s Lungs?",
    sec1t:
      "Smoker’s lungs are damaged due to prolonged exposure to harmful chemicals in cigarettes. They appear blackened, clogged with tar, and have reduced capacity for oxygen exchange. Non-smoker’s lungs are typically pink, healthy, and function efficiently to supply oxygen to the body. The differences affect breathing, stamina, and overall health.",
    sec2h: "Activity",
    sec2t:
      "Use a visual chart or 3D lung model to compare healthy vs diseased lungs. Show differences in color, texture, and function. Label parts like bronchi, alveoli, and lung tissue. Demonstrate how smoking affects airways and oxygen exchange. Discuss symptoms of lung diseases like emphysema and lung cancer using real-life cases or pictures for visual impact.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Identify the structure and function of the lungs and airways",
      "Understand the harmful effects of smoking on the respiratory system",
      "Compare the appearance of healthy vs smoker’s lungs",
      "Learn how tar, nicotine, and carbon monoxide damage lung tissue",
      "Recognize the signs of respiratory diseases caused by smoking",
      "Understand the importance of lung capacity and clean air",
      "Promote anti-smoking awareness and healthy lifestyle choices",
      "Encourage discussions on prevention, quitting, and lung care.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Smoker’s lungs are blackened and damaged due to tar and toxic chemicals from cigarette smoke. Non-smoker’s lungs remain pink and healthy, allowing better oxygen exchange. Understanding this difference encourages people to avoid smoking and helps prevent lung diseases like bronchitis, emphysema, or lung cancer.",
  },
  {
    id: 13,
    title: "The Structure of Hemoglobin",
    description: "Biology | Human Body | Digestion",
    image:
      "https://cdn.prod.website-files.com/621e95f9ac30687a56e4297e/673fe052ac678cb4b2063b82_V2_1730456976590_18c830db-95cd-4680-965e-198d0977995b_HIGH_RES.png",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/223db202d986496ebbf85964f7760992/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is the Structure of Hemoglobin?",
    sec1t:
      "Hemoglobin is an iron-containing protein found in red blood cells responsible for carrying oxygen from the lungs to tissues and returning carbon dioxide to the lungs. It has a quaternary structure made up of four polypeptide chains—two alpha and two beta chains—each with an iron-rich heme group that binds to oxygen. This structure allows hemoglobin to carry up to four oxygen molecules at a time, enabling efficient oxygen transport in the body.",

    sec2h: "Activity",
    sec2t:
      "Use a 3D model or diagram to explore hemoglobin’s quaternary structure. Highlight the four subunits (2 alpha and 2 beta chains) and locate the heme groups. Demonstrate how oxygen binds to iron in each heme. Show how shape changes when oxygen binds (cooperative binding). Compare normal hemoglobin with mutated forms like sickle-cell hemoglobin to show how structure affects function and health.",

    sec3h: "Learning Objectives",
    sec3t: [
      "Understand the composition and function of hemoglobin",
      "Identify the four subunits and heme groups in hemoglobin",
      "Explain how hemoglobin carries oxygen and carbon dioxide",
      "Learn about the role of iron in oxygen binding",
      "Understand cooperative binding and oxygen affinity",
      "Compare normal and abnormal hemoglobin (e.g., HbA vs HbS)",
      "Recognize how hemoglobin supports respiration and energy",
      "Discuss how hemoglobin disorders affect health (like anemia or sickle-cell disease)",
    ],

    sec4h: "Why It Matters",
    sec4t:
      "Hemoglobin plays a vital role in oxygen transport and is essential for life. Its unique structure allows it to pick up oxygen in the lungs and deliver it to tissues throughout the body. Understanding hemoglobin helps us learn how the body functions, what causes conditions like anemia or sickle cell disease, and why iron is crucial in our diet. A deeper knowledge of hemoglobin supports awareness of respiratory and blood-related health issues.",
  },
  {
    id: 14,
    title: "Capillary Cross Section",
    description: "Biology | Human Body | Digestion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4lBwvOcwrQ2yBrjF7JmhQrjLkYYu05Rv6HA&s",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/45a708382714453ebc866e82c7ab47c4/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is a Capillary?",
    sec1t:
      "Capillaries are the smallest blood vessels in the body and serve as the connection between arteries and veins. Their thin, one-cell-thick walls allow for the exchange of oxygen, carbon dioxide, nutrients, and waste between the blood and surrounding tissues. These microscopic vessels form dense networks (capillary beds) that reach nearly every cell in the body, ensuring effective delivery and removal of substances.",
    sec2h: "Activity",
    sec2t:
      "Use a labeled diagram or 3D model to explore a cross-section of a capillary. Identify the single layer of endothelial cells that make up the wall, and observe red blood cells moving through in single file. Demonstrate how oxygen and nutrients exit the blood while carbon dioxide and waste enter. Compare this structure to arteries and veins in terms of thickness and function. Encourage students to model the diffusion process in an interactive classroom setup.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand the basic structure and function of capillaries.",
      "Identify endothelial cells and their role in capillary walls.",
      "Learn how diffusion occurs across the capillary wall.",
      "Recognize the importance of capillary beds in tissue health.",
      "Compare capillaries with arteries and veins structurally and functionally.",
      "Explore how oxygen, nutrients, and waste are exchanged in capillaries.",
      "Understand how blood pressure affects capillary exchange.",
      "Recognize how diseases like diabetes or hypertension can affect capillary function.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Capillaries play a critical role in maintaining the body’s internal environment by enabling the exchange of gases and nutrients with tissues. Understanding their structure and function helps us see how oxygen reaches our cells and how waste is removed. This knowledge is vital for learning how the circulatory system supports life and how certain health conditions can disrupt this balance.",

  },
  {
    id: 15,
    title: "Covid 19 Virus",
    description: "Biology | Human Body | Digestion",
    image:
      "https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1920v.jpg?sfvrsn=4dba955c_19",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/01c083362df04291bd0ba380fb299838/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is the COVID-19 Virus?",
    sec1t:
      "COVID-19 is a disease caused by the novel coronavirus SARS-CoV-2. It primarily spreads through respiratory droplets when an infected person coughs, sneezes, or talks. The virus mainly affects the respiratory system but can impact other organs as well. Common symptoms include fever, cough, fatigue, and loss of taste or smell. In severe cases, it can lead to pneumonia, organ failure, or death, especially in older adults or people with preexisting health conditions.",
    sec2h: "Activity",
    sec2t:
      "Use a labeled diagram or animation to explore the structure of the coronavirus. Highlight key parts such as the spike protein, envelope, RNA genome, and lipid membrane. Show how the virus attaches to and enters human cells using the spike protein and ACE2 receptors. Create a timeline or flowchart showing how infection progresses in the body and how the immune system responds. Discuss safety measures like wearing masks, washing hands, and vaccines.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand what COVID-19 is and how it spreads.",
      "Identify the structure of the coronavirus (SARS-CoV-2).",
      "Explain how the virus enters and infects human cells.",
      "Recognize common symptoms and potential complications of COVID-19.",
      "Learn how the immune system fights the virus.",
      "Understand the importance of vaccines and how they work.",
      "Promote awareness of preventive measures like hygiene and distancing.",
      "Recognize the global impact of COVID-19 on health and society.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "COVID-19 has affected millions of lives around the world. Learning about the virus helps us understand how it spreads, how our bodies respond, and how we can protect ourselves and others. This knowledge is essential for staying safe, supporting public health, and being prepared for future outbreaks.",

  },
  {
    id: 16,
    title: "Shapes of bacteria",
    description: "Biology | Human Body | Digestion",
    image:
      "https://microbeonline.com/wp-content/uploads/2021/05/Basic-morphologies-of-various-bacteria.png",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/2ac949aba46c4adfa722be0c99281d66/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What are the Shapes of Bacteria?",
    sec1t:
      "Bacteria are microscopic single-celled organisms that come in various shapes. The three main shapes are **coccus** (spherical), **bacillus** (rod-shaped), and **spirillum** (spiral or curved). Some bacteria may form chains, clusters, or pairs based on how they divide and grow. These shapes help scientists classify bacteria and understand their behavior, mobility, and how they cause disease.",
    sec2h: "Activity",
    sec2t:
      "Use labeled diagrams or 3D models to identify and compare the different shapes of bacteria: coccus (round), bacillus (rod), and spirillum (spiral). Create clay or paper models to visualize the shapes. Arrange models into common groupings like streptococci (chains), staphylococci (clusters), and diplobacilli (pairs). Discuss how shape affects movement and interaction with host cells, and how it helps in bacterial identification in labs.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand that bacteria come in different shapes.",
      "Identify the three main bacterial shapes: coccus, bacillus, and spirillum.",
      "Learn about bacterial groupings like chains and clusters.",
      "Recognize how shape helps classify and identify bacteria.",
      "Explore how shape affects mobility and infection potential.",
      "Understand the role of bacteria in health, environment, and disease.",
      "Compare bacterial shapes under a microscope (real or virtual).",
      "Relate bacterial shape to examples of diseases they may cause.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Recognizing the shapes of bacteria helps scientists and doctors identify the type of bacteria causing an infection. This knowledge is important for choosing the right treatment and understanding how bacteria behave. Learning about bacterial shapes also helps students appreciate the diversity and roles of microorganisms in health, disease, and the environment.",

  },
  {
    id: 17,
    title: "Differences Between Archaea and Bacteria",
    description: "Biology | Human Body | Digestion",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76C7ArvjjcN2qUctqkBzVU6Tb0RmOY6x53Q&s",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/dba461f743a94941bd269709a72ae38b/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is the Difference Between Archaea and Bacteria?",
    sec1t:
      "Archaea and Bacteria are both single-celled microorganisms without a nucleus (prokaryotes), but they belong to different domains of life. While they look similar under a microscope, they differ in many ways. Archaea have unique cell membranes and genetic material more similar to eukaryotes (like humans), while bacteria have different structures and chemical makeup. Archaea often live in extreme environments, such as hot springs or salt lakes, while bacteria are found almost everywhere, including soil, water, and the human body.",
    sec2h: "Activity",
    sec2t:
      "Use a comparison chart or Venn diagram to list similarities and differences between archaea and bacteria. Examine labeled diagrams showing their structures. Research environments where archaea are found (like deep-sea vents) and compare with habitats of bacteria. Discuss examples of how each type of organism impacts human life — like helpful gut bacteria or methane-producing archaea. You can also model their membranes and shapes using craft materials.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand that archaea and bacteria are both prokaryotes.",
      "Identify structural differences in their cell walls and membranes.",
      "Learn that archaea have genetic similarities to eukaryotes.",
      "Compare their habitats and preferred living conditions.",
      "Recognize how archaea survive in extreme environments.",
      "Explore the roles of bacteria and archaea in ecosystems.",
      "Understand their importance in biotechnology and research.",
      "Use charts or diagrams to visually compare their features.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Knowing the difference between archaea and bacteria helps us better understand the diversity of life on Earth. Archaea provide insights into evolution and how life can survive in extreme conditions. Bacteria impact our health, environment, and industry. Learning about both helps in scientific research, medicine, and understanding Earth’s earliest life forms.",

  },
  {
    id: 18,
    title: "Bacteria and fungal yeast",
    description: "Biology | Human Body | Digestion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIwE1DCMV-BC5mgKj5TErQrMJNjQRkAZRs1Sib6WdjRS688cnq2xMCCiq7OD2LxpdQaY&usqp=CAU",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/2652f18e3b9b47f9835b23e2e63a3e62/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What are Bacteria and Fungal Yeast?",
    sec1t:
      "Bacteria and fungal yeast are both microorganisms, but they belong to different biological kingdoms. Bacteria are single-celled **prokaryotes**, meaning they have no true nucleus or organelles. They reproduce quickly and are found almost everywhere — in soil, water, food, and the human body. Fungal yeast, on the other hand, are **eukaryotes**, meaning they have a defined nucleus and organelles. Yeast is a type of fungus that is mostly single-celled and is commonly used in baking and fermentation. While both can be beneficial or harmful, they differ greatly in structure, function, and complexity.",
    sec2h: "Activity",
    sec2t:
      "Use a comparison chart or microscope images to observe bacteria and yeast. Identify key differences such as cell structure (nucleus, cell wall type), reproduction methods, and size. Conduct a simple experiment like making dough rise using yeast to observe fermentation. Compare it with bacteria cultures from yogurt or soil. Create a model showing the difference between prokaryotic (bacteria) and eukaryotic (yeast) cells using craft materials.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand that bacteria are prokaryotes and yeast are eukaryotes.",
      "Identify structural differences such as the presence of a nucleus.",
      "Explore how bacteria and yeast reproduce (binary fission vs budding).",
      "Compare their roles in food, health, and industry.",
      "Recognize beneficial types like probiotic bacteria and baking yeast.",
      "Learn how both can also cause infections or spoilage.",
      "Observe bacterial and yeast growth through simple lab activities.",
      "Understand their importance in biotechnology and everyday life.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Bacteria and yeast are important to human life. While some cause illness, many are essential in making food, aiding digestion, and even creating medicines. Understanding their differences helps us use them safely and effectively in health, science, and industry. It also teaches us how diverse and fascinating microscopic life can be.",

  },
  {
    id: 19,
    title: "Good and bad bacterial flora",
    description: "Biology | Human Body | Digestion",
    image:
      "https://www.shutterstock.com/image-vector/good-bacteria-bad-enteric-intestinal-600w-380527045.jpg",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/b98ef0450f8f417d84764a3c3116af65/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is Good and Bad Bacterial Flora?",
    sec1t:
      "Bacterial flora refers to the community of bacteria living in and on our bodies, especially in places like the gut, skin, mouth, and respiratory tract. Some bacteria are **beneficial (good flora)** and help with digestion, vitamin production, and protecting against harmful microbes. Others can be **harmful (bad flora)** if they grow too much or invade places they shouldn't be, leading to infections or disease. A healthy balance between good and bad bacteria is essential for maintaining overall health.",
    sec2h: "Activity",
    sec2t:
      "Use diagrams or infographics to show examples of good and bad bacteria in the human body. Create a chart listing helpful bacteria (like *Lactobacillus* or *Bifidobacterium*) and harmful ones (like *Salmonella* or *E. coli*). Conduct a classroom discussion or experiment showing how probiotics (good bacteria in yogurt) affect digestion. You can also simulate bacterial balance using colored beads or blocks to visualize how imbalance affects the body.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand what bacterial flora is and where it lives in the body.",
      "Identify examples of good bacteria and their functions.",
      "Recognize harmful bacteria and how they cause illness.",
      "Explore how good flora prevents infection by outcompeting bad bacteria.",
      "Learn how diet, antibiotics, and hygiene affect bacterial balance.",
      "Understand the importance of probiotics and gut health.",
      "Compare symptoms of bacterial imbalance (like in food poisoning or infections).",
      "Promote awareness of maintaining a healthy microbial balance.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Good bacteria support digestion, immunity, and overall health, while harmful bacteria can cause infections and diseases. Understanding the difference helps us make healthy choices, use antibiotics responsibly, and appreciate the role of microbes in keeping our bodies functioning properly.",

  },
  {
    id: 20,
    title: "Complete Human Head Anatomy",
    description: "Biology | Human Body | Digestion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhciX8EcHVVX228I2Ag4D1pIEGDDHC7nGqeg&s",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/c240eee6c2824f8cbb105129392711b2/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is the Anatomy of the Human Head?",
    sec1t:
      "The human head is a complex structure made up of the **skull, brain, facial bones, muscles, sensory organs**, and important systems like the nervous and circulatory systems. It houses the **brain**, which controls all body functions; the **eyes, ears, nose, and mouth**, which handle sensory input; and the **skull**, which protects the brain. Key areas include the **cranium, mandible (jawbone), facial muscles**, blood vessels, and cranial nerves. Together, these parts enable thinking, speaking, breathing, eating, and sensing the environment.",
    sec2h: "Activity",
    sec2t:
      "Use a 3D model, diagram, or virtual anatomy tool to explore the human head in layers—starting with the skull and moving inward to the brain and internal organs. Label the **cranium, mandible, eyes, ears, nasal cavity, mouth, brain lobes**, and major nerves like the optic and facial nerves. Conduct a class presentation or quiz to reinforce the names and functions of each part. Include hands-on activities like assembling a head model or identifying parts on a worksheet.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Identify major bones in the human skull (cranium, mandible, etc.).",
      "Understand the location and function of brain regions (lobes, cerebellum, brainstem).",
      "Label sensory organs like the eyes, ears, nose, and mouth.",
      "Learn about facial muscles used in expressions and speech.",
      "Recognize the role of cranial nerves in sensation and movement.",
      "Explore how the head protects the brain and supports sensory input.",
      "Understand the role of blood vessels in supplying the brain and face.",
      "Appreciate the head’s function in communication, thinking, and survival.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "The human head contains critical organs that control thought, sensation, and basic survival functions. Understanding its anatomy helps us know how we think, see, hear, speak, and stay alive. It also supports medical knowledge, safety awareness, and appreciation of how the body works in harmony.",

  },
  {
    id: 21,
    title: "Complete Human Anatomy",
    description: "Biology | Human Body | Digestion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3l9coELEDiEwkaezvAwMbvYSThP6PCZfvlw&s",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/c904a5a65ae145a0bc535645c7e693af/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is Complete Human Anatomy?",
    sec1t:
      "Human anatomy is the study of the structure of the human body. It includes all organs, tissues, and systems that work together to keep us alive and functioning. The body is organized into **major systems** such as the skeletal, muscular, circulatory, nervous, respiratory, digestive, excretory, endocrine, immune, and reproductive systems. Each system contains specific organs that perform vital functions. Human anatomy helps us understand how the body is built and how it works—from the bones and muscles to the brain, heart, and lungs.",
    sec2h: "Activity",
    sec2t:
      "Use a full-body diagram or 3D model to explore the human body system by system. Label organs in each system (e.g., heart in circulatory, lungs in respiratory, brain in nervous system). Conduct a group project where each team presents a different system. Use puzzles, posters, or clay models to visualize internal organs. Include simple experiments or health facts that relate to real-life situations (e.g., how the lungs expand when we breathe or how the heart beats faster during exercise).",
    sec3h: "Learning Objectives",
    sec3t: [
      "Identify the major systems of the human body.",
      "Understand the function of each system (skeletal, muscular, etc.).",
      "Label key organs like the brain, heart, lungs, liver, kidneys, and intestines.",
      "Learn how different body systems work together to maintain life.",
      "Recognize the importance of bones, muscles, nerves, and blood flow.",
      "Understand how nutrition, exercise, and health choices affect body systems.",
      "Compare male and female reproductive anatomy.",
      "Appreciate the complexity and coordination of human biology.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "Understanding complete human anatomy gives us a deeper appreciation of how our bodies function. It helps us make informed health decisions, understand medical care, and recognize signs when something is wrong. Studying anatomy is essential for careers in medicine, sports, biology, and everyday life awareness of personal health and well-being.",

  },
  {
    id: 22,
    title: "Neurves system",
    description: "Biology | Human Body | Digestion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8NlvumUT-cg9Hgptc6hPF_iCT6J8kiE43g&s",
    // icon: Beaker,
    banner: bg6,
    EmbelLink:
      "https://sketchfab.com/models/3db707928e274e3bb72b3f7536a2da17/embed",
    module3D: null,
    Postion: [0, 0, 0],
    category: "Human Biology",
    difficulty: "Beginner",
    sec1h: "What is the Nervous System?",
    sec1t:
      "The nervous system is the body's communication network that controls and coordinates all body activities. It includes the **brain, spinal cord**, and **nerves** that run throughout the body. The nervous system is divided into the **central nervous system (CNS)**—which includes the brain and spinal cord—and the **peripheral nervous system (PNS)**, which includes all other nerves. It allows us to think, move, feel, and respond to the environment by sending electrical signals between the brain and body.",
    sec2h: "Activity",
    sec2t:
      "Use a labeled diagram or interactive 3D model to explore the parts of the nervous system. Identify the brain, spinal cord, and major nerves. Trace how signals travel from sensory organs to the brain and back to muscles. Create a simple model using strings and paper to represent how messages are sent. Perform a reaction time activity using a ruler drop experiment to demonstrate how quickly the nervous system responds to stimuli.",
    sec3h: "Learning Objectives",
    sec3t: [
      "Understand the structure and function of the nervous system.",
      "Identify the brain, spinal cord, and peripheral nerves.",
      "Learn how the central and peripheral nervous systems work together.",
      "Recognize the role of neurons in transmitting signals.",
      "Understand the difference between voluntary and involuntary actions.",
      "Explore how the brain controls thoughts, movement, and senses.",
      "Learn how reflexes work and why they happen quickly.",
      "Discuss the effects of nervous system disorders like epilepsy or paralysis.",
    ],
    sec4h: "Why It Matters",
    sec4t:
      "The nervous system controls everything from breathing and heartbeat to thinking and feeling. It helps us interact with the world and keeps our body working properly. Learning about the nervous system helps us understand brain function, how we react to danger, how injuries affect movement, and why protecting the brain and spine is important for health and safety.",
  }
];
