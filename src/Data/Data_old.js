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
];
