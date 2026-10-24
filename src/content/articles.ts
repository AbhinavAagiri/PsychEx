export type Block =
  | { kind: "p"; text: string }
  | { kind: "sub"; text: string }
  | { kind: "list"; items: { label?: string; text: string }[] };

export type Section = {
  heading: string;
  blocks: Block[];
};

export type Article = {
  slug: string;
  title: string;
  shortTitle: string;
  standfirst: string;
  author: string;
  topic: string;
  minutes: number;
  sections: Section[];
  references: string[];
};

type ArticleInput = Omit<Article, "minutes">;

const articleData: ArticleInput[] = [
  {
    slug: "technology-and-developing-brains",
    title: "The Impact of Technology on Developing Brains",
    shortTitle: "Technology and developing brains",
    standfirst:
      "Screens are not simply good or bad for young brains. What the research says about attention, sleep, social life, and the adults who set the rules.",
    author: "Abhinav Aagiri",
    topic: "Technology",
    sections: [
      {
        heading: "Introduction",
        blocks: [
          {
            kind: "p",
            text: "In today’s digital age, technology is ubiquitous, infiltrating every aspect of our lives, from education and entertainment to social interaction and personal development. For children and young adults, the exposure to technology is even more profound. This article delves into the multifaceted effects of technology on the developing brains of young people, highlighting both the benefits and potential drawbacks, supported by recent research, statistics, and expert opinions.",
          },
        ],
      },
      {
        heading: "Cognitive development",
        blocks: [
          {
            kind: "p",
            text: "Technology’s impact on cognitive development in children and young adults is a double-edged sword. On one hand, interactive and educational apps can enhance learning and cognitive skills. For example, a study published in the Journal of Educational Psychology found that children who used educational apps showed significant improvement in language skills and problem-solving abilities compared to those who did not use such tools.",
          },
          {
            kind: "p",
            text: "However, excessive screen time can have detrimental effects. Research from the National Institutes of Health (NIH) indicates that children who spend more than two hours a day on screens scored lower on thinking and language tests. Additionally, a longitudinal study by Twenge and Campbell (2018) highlights that excessive use of social media and smartphones is associated with lower attention spans and decreased academic performance.",
          },
        ],
      },
      {
        heading: "Social and emotional development",
        blocks: [
          {
            kind: "p",
            text: "Technology has revolutionized social interactions, providing platforms for young people to connect with peers and express themselves. Social media, in particular, offers opportunities for socialization and community building. A survey by Common Sense Media revealed that 81% of teens believe social media helps them feel more connected to their friends.",
          },
          {
            kind: "p",
            text: "However, there is a dark side. Cyberbullying, social comparison, and the pressure to maintain a certain online image can lead to anxiety, depression, and other mental health issues. The Journal of Adolescence published a study showing that higher social media use correlates with increased rates of depression and anxiety among teenagers. Furthermore, a 2019 report from the American Psychological Association (APA) suggests that the constant need for digital validation can harm self-esteem and emotional well-being.",
          },
        ],
      },
      {
        heading: "Physical health",
        blocks: [
          {
            kind: "p",
            text: "The physical repercussions of prolonged technology use are also significant. Sedentary behavior associated with excessive screen time can lead to obesity and other health issues. The World Health Organization (WHO) recommends that children aged 5–17 engage in at least 60 minutes of moderate to vigorous physical activity daily, yet a study from the Kaiser Family Foundation found that the average screen time for 8–18-year-olds is over 7.5 hours per day.",
          },
          {
            kind: "p",
            text: "Moreover, the blue light emitted from screens can disrupt sleep patterns, crucial for healthy brain development. The Journal of Pediatrics published research indicating that children with more screen time are more likely to have trouble falling asleep, staying asleep, and getting enough rest.",
          },
        ],
      },
      {
        heading: "Digital literacy and safety",
        blocks: [
          {
            kind: "p",
            text: "Despite the challenges, technology also presents opportunities for fostering digital literacy and safety. Schools and parents can leverage technology to teach children critical skills such as coding, digital citizenship, and online safety. A report from the Pew Research Center found that 95% of teens have access to a smartphone, making it imperative to integrate digital literacy into education to prepare them for the future.",
          },
        ],
      },
      {
        heading: "The role of parental guidance",
        blocks: [
          {
            kind: "p",
            text: "Parental involvement plays a crucial role in mediating the effects of technology on young minds. Active and engaged parenting can help mitigate some of the negative impacts while enhancing the positive aspects of technology use. According to a report by the American Academy of Pediatrics (AAP), children whose parents set clear guidelines and model balanced tech use are more likely to develop healthy habits.",
          },
          {
            kind: "list",
            items: [
              {
                label: "Modeling behavior",
                text: "Children often mimic their parents’ behavior. Parents who demonstrate balanced screen time, prioritize face-to-face interactions, and engage in non-digital activities set a positive example.",
              },
              {
                label: "Open communication",
                text: "Discussing the benefits and risks of technology with children can foster a healthy understanding and responsible use. Creating an environment where children feel comfortable discussing their online experiences is crucial.",
              },
              {
                label: "Co-engagement",
                text: "Participating in technology use with children, such as playing educational games together or co-viewing content, can enhance learning and make technology use a shared, supervised activity.",
              },
              {
                label: "Encourage offline activities",
                text: "Balance screen time with physical activity, social interaction, and creative play.",
              },
            ],
          },
        ],
      },
      {
        heading: "Implications for future generations",
        blocks: [
          {
            kind: "p",
            text: "The ongoing integration of technology into daily life will undoubtedly shape the future of coming generations. As technology continues to evolve, so too will its impact on cognitive, social, and physical development. Longitudinal studies and continuous research are essential to understand these effects fully and to develop strategies that maximize benefits while minimizing harm.",
          },
          {
            kind: "p",
            text: "Educational systems are beginning to adapt, incorporating technology in ways that enhance learning while promoting critical thinking and creativity. However, it remains imperative to strike a balance, ensuring that technology serves as a tool for development rather than a detractor.",
          },
        ],
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            kind: "p",
            text: "Technology is an integral part of modern life, offering numerous benefits for cognitive, social, and educational development. However, it is crucial to balance its use with mindful strategies to mitigate potential negative effects on the developing brains of children and young adults. By fostering a healthy relationship with technology, we can harness its potential while protecting the well-being of future generations.",
          },
        ],
      },
    ],
    references: [
      "Twenge, Jean M., and W. Keith Campbell. “Associations Between Screen Time and Lower Psychological Well-Being Among Children and Adolescents: Evidence from a Population-Based Study.” Preventive Medicine Reports, vol. 12, 2018, pp. 271–283.",
      "National Institutes of Health (NIH). “Effects of Excessive Screen Time on Child Development.” 2023.",
      "Common Sense Media. “Social Media, Social Life: Teens Reveal Their Experiences.” 2018.",
      "American Psychological Association. “Social media’s growing impact on our lives.” 2019.",
      "World Health Organization (WHO). “Guidelines on Physical Activity, Sedentary Behavior, and Sleep for Children Under 5 Years of Age.” 2019.",
      "Pew Research Center. “Teens, Social Media & Technology.” 2018.",
    ],
  },
  {
    slug: "social-influences",
    title: "Social Influences on Individual Performance",
    shortTitle: "Social influences on performance",
    standfirst:
      "Why an audience can make a virtuoso better and a beginner worse: social facilitation, evaluation apprehension, and the curve that explains both.",
    author: "Aanya Patel",
    topic: "Social psychology",
    sections: [
      {
        heading: "Introduction",
        blocks: [
          {
            kind: "p",
            text: "Human performance can be greatly influenced by the environment. The mere presence of others can significantly impact how we perform tasks, make decisions, and deal with stress. Understanding these social influences involves exploring the social contexts that act upon the individual. This piece examines these influences and focuses on specific theories, such as social facilitation and the Yerkes–Dodson Law, and how these concepts may apply to various situations.",
          },
        ],
      },
      {
        heading: "Theories of social influence",
        blocks: [
          {
            kind: "p",
            text: "Many theories have been developed to explain how social contexts influence individual performance. The following are two significant ones.",
          },
          {
            kind: "sub",
            text: "Social facilitation",
          },
          {
            kind: "p",
            text: "Social facilitation is a phenomenon in which an individual’s performance is affected by the presence of others. Initially studied by Norman Triplett in 1898, the concept has evolved to highlight how it can enhance or impair performance. Robert Zajonc’s model of social facilitation stated that the presence of others can cause arousal, which leads to an increase in dominant responses. According to this theory, a professional musician would perform better with an audience, and a beginner athlete would perform worse if being watched.",
          },
          {
            kind: "list",
            items: [
              {
                text: "If a task is simple and familiar to an individual, the dominant response is often accurate, leading to better performance.",
              },
              {
                text: "If the task is difficult and new to an individual, the dominant response is often inaccurate and leads to worsened performance.",
              },
            ],
          },
          {
            kind: "p",
            text: "Social facilitation may occur due to a variety of factors.",
          },
          {
            kind: "list",
            items: [
              {
                label: "Evaluation apprehension",
                text: "Social facilitation effects are strongest when people feel they are being judged or evaluated, which can enhance effort or focus as well as increase anxiety.",
              },
              {
                label: "The mere presence effect",
                text: "Simply being around others can create arousal even if we’re not worried about being actively evaluated.",
              },
              {
                label: "Task complexity",
                text: "Simple or well-practiced tasks tend to be performed better in the presence of others, while complex or new tasks may worsen performance.",
              },
            ],
          },
          {
            kind: "sub",
            text: "The Yerkes–Dodson Law",
          },
          {
            kind: "p",
            text: "The Yerkes–Dodson Law, first developed by Robert M. Yerkes and John D. Dodson in 1908, describes the relationship between arousal levels and performance. It states that there is an optimal level of arousal for peak performance, and deviations from this level, either too low or too high, can impair performance.",
          },
          {
            kind: "p",
            text: "The law describes why in office settings, workers perform best under moderate stress, and why students thrive in moderate competition without losing motivation or reaching burnout.",
          },
          {
            kind: "p",
            text: "Below are a few aspects of this law.",
          },
          {
            kind: "list",
            items: [
              {
                label: "Optimal arousal",
                text: "The basis of the law is that moderate arousal leads to optimal performance. Too little arousal can result in underperformance due to lack of motivation, while excessive arousal can cause stress and anxiety, impairing performance.",
              },
              {
                label: "Task difficulty",
                text: "For simple tasks, higher levels of arousal can enhance performance. For complex tasks, lower levels of arousal are more conducive to optimal performance.",
              },
            ],
          },
        ],
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            kind: "p",
            text: "Social influences play a crucial role in shaping individual performance. Understanding the dynamics of social facilitation and the Yerkes–Dodson Law can help individuals and organizations harness these influences to improve performance and well-being. By applying these insights in educational settings, workplaces, and personal development, we can create environments that foster productivity, satisfaction, and overall quality of life.",
          },
        ],
      },
    ],
    references: [],
  },
  {
    slug: "types-of-motivation",
    title: "Types of Motivation",
    shortTitle: "Types of motivation",
    standfirst:
      "Why we do what we do. Maslow’s hierarchy and self-determination theory, and the difference between working for a grade and working for a reason.",
    author: "Keerthi Meruva",
    topic: "Motivation",
    sections: [
      {
        heading: "Introduction",
        blocks: [
          {
            kind: "p",
            text: "Human behavior is fundamentally driven by motivation. It is what drives us to take action, be it completing a task, satisfying a need, or just going about our everyday lives. Comprehending motivation involves studying the mental processes and fundamental mechanisms that fuel actions and evaluating the ways in which distinct forms of motivation impact human behavior. This piece explores the psychology of motivation, emphasizing important theories, the differences between extrinsic and intrinsic motivation, and how they can be applied in different situations. We will also delve into different psychologists and how their contributions revolutionized the field of motivation itself.",
          },
        ],
      },
      {
        heading: "Theories of motivation",
        blocks: [
          {
            kind: "p",
            text: "Many theories have been proposed to explain why motivation is such a complex phenomenon. The theories mentioned below are a few of the more significant ones.",
          },
          {
            kind: "sub",
            text: "Maslow’s hierarchy of needs",
          },
          {
            kind: "p",
            text: "Abraham Maslow’s hierarchy of needs is among the most well-known theories of motivation. Maslow proposed that human needs are arranged in a hierarchical order, beginning with basic physiological demands at the base and rising toward higher-level psychological needs at the top. Maslow states that individuals are driven to satisfy these wants in a particular order.",
          },
          {
            kind: "list",
            items: [
              {
                label: "Physiological",
                text: "Basic survival needs such as food, water, and shelter.",
              },
              {
                label: "Safety",
                text: "The need for security, stability, and protection from harm.",
              },
              {
                label: "Love and belonging",
                text: "The need for social connections, love, and affection.",
              },
              {
                label: "Esteem",
                text: "The need for self-esteem, recognition, and respect from others.",
              },
              {
                label: "Self-actualization",
                text: "The need to realize one’s potential and achieve personal growth and fulfillment.",
              },
            ],
          },
          {
            kind: "p",
            text: "According to Maslow’s theory, people are compelled to take care of their lower-level demands first before their higher-level needs. After the basic necessities are satisfied, people can concentrate on developing their individuality and self-actualization.",
          },
          {
            kind: "sub",
            text: "Self-determination theory (SDT)",
          },
          {
            kind: "p",
            text: "Self-determination theory, developed by Edward Deci and Richard Ryan, contends that autonomy, competence, and relatedness — three basic psychological needs — are what motivate people. SDT states that people are driven to act in ways that satisfy these needs.",
          },
          {
            kind: "list",
            items: [
              {
                label: "Autonomy",
                text: "The need to feel in control of one’s own actions and decisions. It means making independent decisions that do not have influence from external forces.",
              },
              {
                label: "Competence",
                text: "The need to feel effective and capable in one’s activities. One usually wants to exert a significant effect on their environment.",
              },
              {
                label: "Relatedness",
                text: "The need to feel connected and accepted by others. It is the desire to feel loved, connected, and meaningfully involved with the broader social world.",
              },
            ],
          },
          {
            kind: "p",
            text: "SDT contrasts between extrinsic and intrinsic motivation. Extrinsic motivation is doing something because it entails getting rewards from outside sources or avoiding bad outcomes, whereas intrinsic motivation is doing something because it brings happiness and contentment from inside. An example of extrinsic motivation is an employee who works overtime to earn a bonus or a student who studies hard to get good grades. Intrinsic motivation is when a person paints just for the sheer pleasure of it. It comes from their own self. According to SDT, intrinsic motivation outperforms extrinsic motivation in terms of sustainability, well-being, and performance.",
          },
        ],
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            kind: "p",
            text: "A wide range of theories and notions that explain why humans act in certain ways are included in the psychology of motivation. Comprehending the differences between intrinsic and extrinsic motivation and recognizing the significance of meeting psychological needs can help individuals and organizations promote motivation and overall health. By using these insights in education, the workplace, and personal growth, we can improve productivity, happiness, and the general quality of life.",
          },
        ],
      },
    ],
    references: [],
  },
  {
    slug: "positive-childhood-experiences",
    title:
      "The Importance of Positive Childhood Experiences: A Psychological Perspective of Child Development",
    shortTitle: "Positive childhood experiences",
    standfirst:
      "Prenatal care, parenting styles, and epigenetics: how early experiences are written into a developing brain, and why the earliest years matter so much.",
    author: "Leah Mil",
    topic: "Child development",
    sections: [
      {
        heading: "Introduction",
        blocks: [
          {
            kind: "p",
            text: "We all have our little childhood selves within us. Through unconscious and emotional distinctions, they will, and always have been, the little voice inside of our head. It is through our early childhood experiences, exposure to family dysfunction, and detrimental relationships during our formative years, that trauma and adverse experiences can take deep root in our psyche. It is vital that children are recognized for their early emotional wounds as they can unconsciously manifest themselves into adolescence and adulthood. Positive Childhood Experiences can be developed through safe, stable, nurturing relationships and environments. They have the power to prevent and protect children from traumatic events, toxic stresses, or Adverse Childhood Experiences. This article centers around the importance of early prenatal care, significant outcomes of parental categories, and the biological evidence of childhood experiences on epigenetics.",
          },
        ],
      },
      {
        heading: "Prenatal care",
        blocks: [
          {
            kind: "p",
            text: "During each prenatal stage, genetic and environmental factors can affect development. The developing fetus is completely dependent on the mother for life, and this is demonstrated by biological factors and effects such as:",
          },
          {
            kind: "list",
            items: [
              {
                label: "Teratogen",
                text: "An environmental agent — biological, chemical, or physical — that causes damage to the developing embryo or fetus. Drinking heavily during pregnancy has been found to be the leading preventable cause of intellectual disabilities in children in the United States.",
              },
              {
                label: "Fetal Alcohol Spectrum Disorders (FASD)",
                text: "A collection of birth defects associated with heavy consumption of alcohol during pregnancy.",
              },
            ],
          },
          {
            kind: "p",
            text: "Prenatal mental health can significantly affect the unborn child and its future development. According to research, women experiencing depression or anxiety before or during pregnancy may be at greater risk of having a baby with cognitive, social, and behavioral problems later in life.",
          },
          {
            kind: "list",
            items: [
              {
                label: "Postpartum mood and anxiety disorder",
                text: "One of the most common types of mental disorders in pregnancy in the United States. These disorders include postpartum depression (PPD), a type of major depressive disorder, and postpartum anxiety disorder (PPA).",
              },
            ],
          },
        ],
      },
      {
        heading: "Parenting styles",
        blocks: [
          {
            kind: "p",
            text: "How we parent is an important factor in a child’s overall socioemotional growth and may continue to be prevalent in their behaviors and actions as they age. All parents have different circumstances to interact with and guide their children. A child’s morals, principles, and conduct are generally established through this bond, and each parent can fall into one of these categories.",
          },
          {
            kind: "list",
            items: [
              {
                label: "Authoritative",
                text: "Parents give reasonable demands and consistent limits, express warmth and affection, and listen to the child’s point of view. While children have input into goals and expectations, there are also frequent and appropriate levels of communication between the parent and their child. Generally, this parenting style leads to the healthiest outcomes for children but requires a lot of patience as well as effort from both parties.",
              },
              {
                label: "Authoritarian",
                text: "Parents place a high value on conformity and obedience, are often strict, tightly monitor their children, and express little warmth. Children who grow up with this type of parenting will usually be the most well-behaved in the room because of the consequences of misbehaving, but may also be shy, socially inept, and unable to make their own decisions.",
              },
              {
                label: "Permissive",
                text: "Kids run the show and anything goes; permissive parents make few demands and rarely use punishment. They tend to be very nurturing and loving, and may play the role of a friend rather than a parent. Children of permissive parents usually have some self-esteem and decent social skills but can be impulsive, demanding, selfish, and lack self-regulation.",
              },
              {
                label: "Uninvolved",
                text: "Parents are indifferent, uninvolved, and neglectful. These parents may provide for the child’s basic needs, but little else. The children raised in this parenting style may even be more self-sufficient than children with other types of upbringings but may have also developed these skills out of necessity. Additionally, they might have trouble controlling their emotions, have less effective coping strategies, face academic challenges, and have difficulty maintaining or nurturing social relationships.",
              },
            ],
          },
        ],
      },
      {
        heading: "Epigenetics of stress and trauma",
        blocks: [
          {
            kind: "p",
            text: "Epigenetics is an area of emerging scientific research that shows how environmental influences — children’s experiences — affect the expression of their genes. During development, DNA accumulates chemical marks that regulate gene expression, and this collection of set marks is known as the “epigenome.” Different experiences can alter these marks, further explaining why genetically identical twins can show varying behaviors, skills, health, and achievements; a child’s development is altered through early individual experiences. Epigenetics explains how early childhood experiences can have lifelong impacts.",
          },
          {
            kind: "list",
            items: [
              {
                label: "Changes in epigenetic marks",
                text: "The environment in which a child develops, before and soon after birth, provides powerful experiences that chemically modify certain genes and the information that guides their development, defining how much and when they are expressed. Thus, the epigenome can be affected by positive experiences, such as supportive relationships and opportunities for learning, or negative influences, such as environmental toxins or stressful life circumstances, which leave an altered epigenetic signature on the genes.",
              },
              {
                label: "Reversing negative childhood impacts",
                text: "Recent research demonstrates that there may be ways to reverse certain negative changes and restore healthy functioning, but the very best strategy is to support responsive relationships and reduce stress to build strong brains from the beginning.",
              },
            ],
          },
          {
            kind: "p",
            text: "These signatures caused by significant early experiences can be temporary or permanent, and both types — positive and negative — affect how easily the genes are switched on or off.",
          },
        ],
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            kind: "p",
            text: "During the crucial stages of early brain development, the experiences children have can deeply shape how their genes express themselves. This can affect their future health, abilities, and resilience, and that is why it’s so important to surround young children with nurturing and supportive care from the very beginning. Providing high-quality healthcare for pregnant women, infants, and toddlers, along with offering support to new parents and caregivers, can positively influence the genetic environment around children. Loving relationships and rich, engaging experiences can create positive epigenetic effects that help unlock and nurture each child’s unique potential. With this growing body of research linking childhood trauma to negative long-term health effects, psychologists, researchers, and parent guardians must play their unique roles to create a path filled with positive development for children to flourish in their futures.",
          },
        ],
      },
    ],
    references: [
      "Maier, S. E., & West, J. R. (2001). Drinking patterns and alcohol-related birth defects. Alcohol Research & Health: The Journal of the National Institute on Alcohol Abuse and Alcoholism, 25(3), 168–174.",
      "Prenatal psychological support can positively impact baby’s emotional well-being. CAPPA. (n.d.).",
      "Sanvictores, T. (2022, September 18). Types of parenting styles and effects on children. StatPearls [Internet].",
      "Darling, N. (1999). Parenting style and its correlates. ERIC Digest.",
      "What is epigenetics? The answer to the nature vs. nurture debate. Center on the Developing Child at Harvard University. (2020, October 30).",
    ],
  },
  {
    slug: "substance-use-and-addiction",
    title: "Substance Use, Abuse, and Addiction: A Psychological Perspective",
    shortTitle: "Substance use and addiction",
    standfirst:
      "Addiction is not a failure of willpower. A look at the biology, psychology, and social conditions behind substance use disorders — and the theories that try to explain them.",
    author: "Keerthi Meruva",
    topic: "Clinical psychology",
    sections: [
      {
        heading: "Introduction",
        blocks: [
          {
            kind: "p",
            text: "Addiction, abuse, and substance use are complex issues that have a big impact on people’s lives, families, and society as a whole. Psychology has examined these phenomena thoroughly to comprehend their causes, functions, and effects. This article examines psychological theories and interventions intended to address these issues, as well as the terminologies, causes, and effects of substance use, misuse, and addiction.",
          },
          {
            kind: "p",
            text: "Substance use includes using psychoactive substances such as alcohol, nicotine, and other illegal drugs. It can be used regularly for cultural, medical, or recreational purposes, or for experimental or occasional use. Substance abuse and addiction are not always the result of using drugs, but they can be a possibility. When chemicals are used harmfully to change moods and alter reality, it is referred to as substance abuse. Substance use is marked by its harmful effects or repeated use. Substance dependence, another name for addiction, is a chronic, relapsing condition marked by persistent brain alterations, obsessive drug seeking, and continued use despite negative effects. It often comes with tolerance — the need for more of the drug to have the same effect — and withdrawal symptoms when the drug is stopped. Learning the effects of drugs and their consequences on the brain is important.",
          },
        ],
      },
      {
        heading: "Causes of substance use, abuse, and addiction",
        blocks: [
          {
            kind: "p",
            text: "The development of substance use, abuse, and addiction is influenced by a combination of genetic, environmental, and psychological factors.",
          },
          {
            kind: "sub",
            text: "Biological factors",
          },
          {
            kind: "list",
            items: [
              {
                label: "Genetics",
                text: "Studies show that 40–60% of an individual’s vulnerability to addiction can be attributed to hereditary factors. Genetic variables can impact brain chemistry and the body’s substance metabolism, which can increase or decrease the likelihood of developing substance use disorders.",
              },
              {
                label: "Brain chemistry",
                text: "Addiction and substance abuse modify the brain’s reward system. Drugs of abuse usually cause an increase in dopamine release, a neurotransmitter linked to reward and pleasure. Tolerance and dependency develop as a result of the brain’s limited capacity to create and respond to dopamine over time.",
              },
            ],
          },
          {
            kind: "sub",
            text: "Psychological factors",
          },
          {
            kind: "list",
            items: [
              {
                label: "Personality traits",
                text: "Addiction to substances is more common in people who exhibit tendencies like impulsivity, sensation seeking, and high levels of stress or anxiety.",
              },
              {
                label: "Mental health disorders",
                text: "Substance use as self-medication is more common among people with mental health conditions such as depression, anxiety, and PTSD, which raises the risk of substance use disorders.",
              },
            ],
          },
          {
            kind: "sub",
            text: "Environmental factors",
          },
          {
            kind: "list",
            items: [
              {
                label: "Family environment",
                text: "Substances can be more likely if there is no parental surveillance, early substance exposure, or a family record of substance abuse.",
              },
              {
                label: "Social and peer influence",
                text: "Substance use can start and continue as a result of peer pressure and the need to blend in with a social group. Addiction and abuse rates are also greater in social contexts that support or encourage substance use.",
              },
            ],
          },
        ],
      },
      {
        heading: "Psychological theories of substance use and addiction",
        blocks: [
          {
            kind: "sub",
            text: "Behavioral theories",
          },
          {
            kind: "p",
            text: "Through classical conditioning, drug use can be linked to specific stimuli or environments. For instance, someone may have a strong desire for a drink when they walk into a bar because they have previously connected that setting with drinking. It could also be through operant conditioning, where substance use is positively reinforced by the instantaneous benefits of drugs, or the alleviation of withdrawal symptoms (negative reinforcement). This reinforces the behavior and increases the likelihood that it will happen again.",
          },
          {
            kind: "sub",
            text: "Cognitive theories",
          },
          {
            kind: "p",
            text: "According to expectancy theory, people’s expectations regarding the consequences of substances have an impact on their use. They are more prone to use a substance if they think it would improve their mood or social relations. The cognitive-behavioral approach focuses on the interactions that occur between ideas, emotions, and actions. It implies that persistent use and addiction are facilitated by dysfunctional thought processes, such as believing that substance use is an essential coping mechanism.",
          },
          {
            kind: "sub",
            text: "Social learning theory",
          },
          {
            kind: "p",
            text: "Social learning theory highlights how imitation and observation play a part in substance use. People can pick up drug usage habits by watching peers, family, or media portrayals. Substance use can be initiated and sustained when social reinforcement and behavior modeling are combined.",
          },
          {
            kind: "sub",
            text: "The biopsychosocial model",
          },
          {
            kind: "p",
            text: "The biopsychosocial approach offers a thorough understanding of substance use and addiction by integrating biological, psychological, and social variables. It acknowledges that the emergence of substance use disorders cannot be fully explained by a single component, but rather by the interaction of several components.",
          },
        ],
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            kind: "p",
            text: "Addiction, substance use, and abuse are complicated disorders that call for a sophisticated understanding of psychology. Through an analysis of the interactions between biological, psychological, and social components, we can create preventative and treatment plans that are more successful. To address the obstacles caused by substance use disorders and assist people on their road to recovery, communities, politicians, and healthcare professionals must continue their research together.",
          },
        ],
      },
    ],
    references: [
      "National Institute on Drug Abuse. (2020). Drugs, brains, and behavior: The science of addiction.",
      "American Psychological Association. (2013). Diagnostic and statistical manual of mental disorders (5th ed.). Arlington, VA: American Psychiatric Publishing.",
      "Substance Abuse and Mental Health Services Administration. (2019). Key substance use and mental health indicators in the United States: Results from the 2018 National Survey on Drug Use and Health (HHS Publication No. PEP19-5068, NSDUH Series H-54).",
      "World Health Organization. (2004). Global status report on alcohol and health.",
      "Marlatt, G. A., & Donovan, D. M. (2005). Relapse prevention: Maintenance strategies in the treatment of addictive behaviors. New York, NY: Guilford Press.",
      "Miller, W. R., & Rollnick, S. (2013). Motivational interviewing: Helping people change (3rd ed.). New York, NY: Guilford Press.",
    ],
  },
];

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function readingMinutes(article: ArticleInput) {
  let words = countWords(article.title) + countWords(article.standfirst);
  for (const section of article.sections) {
    words += countWords(section.heading);
    for (const block of section.blocks) {
      if (block.kind === "p" || block.kind === "sub") {
        words += countWords(block.text);
      } else {
        for (const item of block.items) {
          words += countWords(item.text) + (item.label ? countWords(item.label) : 0);
        }
      }
    }
  }
  return Math.max(1, Math.round(words / 210));
}

export const articles: Article[] = articleData.map((article) => ({
  ...article,
  minutes: readingMinutes(article),
}));

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function relatedArticles(slug: string, count = 2) {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, count);
  const others = articles.filter((article) => article.slug !== slug);
  const sameTopic = others.filter((article) => article.topic === current.topic);
  const rest = others.filter((article) => article.topic !== current.topic);
  return [...sameTopic, ...rest].slice(0, count);
}
