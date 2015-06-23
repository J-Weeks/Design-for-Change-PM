# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: dfcusa-pm.cul7rr78u6no.us-east-1.rds.amazonaws.com (MySQL 5.6.19-log)
# Database: dfcusa_pm
# Generation Time: 2015-05-19 02:55:42 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table activities
# ------------------------------------------------------------

-- DROP TABLE IF EXISTS `activities`;

-- CREATE TABLE `activities` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `title` varchar(256) DEFAULT NULL,
--   `user_id` int(11) DEFAULT NULL,
--   `score` int(11) DEFAULT NULL,
--   `stages` text,
--   `skills` text,
--   `age_group` text,
--   `time_required` varchar(256) DEFAULT NULL,
--   `description` text,
--   `pdf` varchar(500) DEFAULT NULL,
--   `last_updated` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LOCK TABLES `activities` WRITE;
-- /*!40000 ALTER TABLE `activities` DISABLE KEYS */;

-- INSERT INTO `activities` (`id`, `title`, `user_id`, `score`, `stages`, `skills`, `age_group`, `time_required`, `description`, `pdf`, `last_updated`)
-- VALUES
-- 	(24,'Demonstrations of Empathy',11,100,'feel','empathy,collaboration,communication,creativity','elementary,middle_school','45','Empathy can be taught in many different ways, and this lesson serves to explore two different ways. Students will collaborate on a musical beat; through teamwork, connectivity, and creative expression, students will recognize that demonstrating empathy is recognizing your place and the place of people around you (Research has shown students who make music together demonstrate more empathy!). Students will additionally explore what it means to listen as you allow them to come together and create a list of questions for you!','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-DemonstrationsinEmpathy.docx.pdf',NULL),
-- 	(25,'Community Reflection: Mini Lessons',11,100,'imagine','communication,connection,critical thinking','all_ages','30','I found it essential to allow students ample space in the time that leads them to picking their problem. My students and I had many days of pure discussion, but it was helpful to incorporate additional methods of reflection. Doing so actually deepens the conversations. This lesson is not meant to be one full lesson, but some of the activities, framed conversations, and methods I used with my students!','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-MoreCommunityReflection.docx-3.pdf',NULL),
-- 	(26,'Mini-Lessons in Empathy',11,100,'feel','empathy,communication,creativity','elementary','15','Demonstrations in empathy can start in the youngest of children, with some great guidance and some fun activities! This lesson provides 3 empathy acitivities for younger students (grades 1-4), to be used together or broken up and incorporated in different lessons. Empathy is all about listening and putting yourselves in somebody elseâ€™s shoes. Students will learn this as they draw times where they showed or could have showed empathy, do a telephone exercise, and play a game of animal farm!','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-TeenyLessonsinEmpathy.docx.pdf',NULL),
-- 	(27,'Community Reflection',11,100,'imagine','communication,creativity','elementary,middle_school','45','As students move closer to choosing their community issue, it is important to allow them to fully understand the components that make a community. This short, flexible lesson explores the different components and gives space for students to frame conversations. Iâ€‹found it important to give students much more space and direction in community discussion.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-CommunityReflection.docx.pdf',NULL),
-- 	(28,'Developing Empathy',11,100,'feel','empathy,collaboration,communication,connection,creativity','all_ages','45','â€‹his lesson is a great way to simply introduce empathy to students. Whether you are able to supplement this lesson with other suggested activity or only have time to cover the basics, it is important for students to grasp how they can demonstrate empathy in their everyday life. Students will be taught a short lesson on empathy, will have group discussion time, and put their creative minds together to create a skit.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-DevelopingEmpathy.docx.pdf',NULL),
-- 	(29,'Happy Faces',11,100,'feel','empathy,communication,connection','elementary','30','Oâ€‹ne of the things I found very important was getting students to understand that empathy is an everyday practice. While coming to together to work on a project for DFC is amazing, what matters more is the character growth students experience and demonstrate on an everyday basis. This lesson was derived from a lesson plan I found online (hâ€‹ttp://www.tolerance.org/lesson/happy-faces)â€‹and served as a challenge for my younger students to reach out to their peers and those around them!','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-HappyFaces.docx.pdf',NULL),
-- 	(33,'Understanding Feelings',11,100,'feel','empathy,communication,reflection','elementary','45','Tâ€‹alking about feelings can be uncomfortable for some, but feelings can be a point of connectivity. When somebody can recognize that they have felt the same in certain situations, empathy flourishes. This lesson will provide the means for students to explore their own feelings and recognition of othersâ€™ feelings through object-based learning, a hands-on activity, and a fun icebreaker game.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-UnderstandingFeelings.docx.pdf',NULL),
-- 	(34,'Stereotype Masks',11,100,'feel','awareness,creativity','elementary,middle_school','45','Before students can put recognize need in their community, they must recognize the power they hold, the power their peers hold, and distortions from their surroundings that can affect them. Addressing stereotypes and identity is a great way to start the Design for Change journey, and this creative activity allows students to illustrate self-expression. This activity can be lengthened to allow for more time to work on their pieces or shortened to fit time constraints, but should be preceded by a more in depth discussion of stereotypes and individual identity.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-Masks.docx-3.pdf',NULL),
-- 	(35,'Paying it Forward',11,100,'feel','empathy,communication,connection','elementary,middle_school','30','â€‹ne of the things I found very important was getting students to understand that empathy is an everyday practice. While coming to together to work on a project for DFC is amazing, what matters more is the character growth students experience and demonstrate on an everyday basis. This lesson was derived from a lesson plan I found online (hâ€‹ttp://www.tolerance.org/lesson/happy-faces)â€‹and served as a challenge for my older students to reach out to their peers and those around them!','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-PayingitForward.docx-3.pdf',NULL),
-- 	(36,'Recognizing the Power in You!',11,100,'feel','communication,reflection','middle_school,high_school','45','Sometimes it is easier to believe false stereotypes or only see our individual flaws. It is so important to give students the opportunity to explore themselves and openly express what they actually like about themselves. This lesson, which is an extension of the transition from stereotypes to identity, will be structured in two parts: a skills inventory for each student to take and a â€œconfidence walkâ€ that we as facilitators were actually taught. Empowered students empower others!','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-SkillsAssessment.docx.pdf',NULL),
-- 	(37,'Introduction to Design for Change: Addressing Stereotypes',11,100,'feel','communication,critical thinking','all_ages','45','Beginning the Design for Change journey with students requires breaking down social barriers. Whether or not you have worked with these students before, this lesson begins the process of looking at the world from a point of view different from what they are used to. Students will create two illustrations of backpacks from their initial point of view of you and from the opportunity to get to know you more. A discussion of the stereotypes they held about you will bring everything together.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-Stereotypes.docx.pdf',NULL),
-- 	(38,'Surveying the Community',11,100,'feel','collaboration,communication,connection','all_ages','30','After discussing how empathy is as much listening as it is acting, students can chose to survey the community before discussing what they thought of it. A student-organized survey is a perfect way to utilize and strengthen some of the skills the students have been utilizing and gives students a strong basis to build a base for discussion and creative problem solving.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-Surveyingthecommunity.docx.pdf',NULL),
-- 	(39,'We All Come from Somewhere',11,100,'feel','empathy,communication,reflection','elementary,middle_school','45','As students participate in self-reflection before they reflect on their community, it is important that they understand the power of listening. This lesson brings together each studentâ€™s identity with the transition to empathy discussions. Questions are the focus here. Students will participate in an icebreaker/game that gives them space to question each other, will attempt to answer questions for facilitators that teaches them to listen better, and then reflect and formulate their own take home activity. I found this lesson useful to draw to a move the tide from identity to empathy, which brings students one leap closer to the imagine stage.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-Weallcomefromsomewhere.docx.pdf',NULL),
-- 	(40,'Who Am I?: Transitioning from Stereotypes to Identity',11,100,'feel','communication,connection,creativity','all_ages','45','Once students understand that they donâ€™t have to define themselves, each other, and their community by stereotypes, it is important to give them time to explore their identity. The focus in identity allows students to explore what they like about themselves, their strengths, and the strengths and good traits of their peers. This lesson will introduce students to the meaning of identity, give them some more creative freedom as they create a formatted poem, and give them space to share and encourage each other.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson-WhoAmI.docx.pdf',NULL),
-- 	(41,'Perspective Taking',10,100,'feel','empathy','middle_school,high_school','60','To truly understand a community problem, you must first recognize the perspective and bias you bring to each problem. To better understand this complex idea, students will observe a photograph and write their own assumptions about what is happening and what the image conveys. Students will then discuss their own points of view and recognize the many different conclusions that can be drawn from looking at the same image.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_PerspectiveTaking.pdf',NULL),
-- 	(42,'Community Perspectives',10,100,'feel','awareness,engagement,empathy','middle_school','60','This is a two part lesson that helps students explore the perspective and needs of their community from a variety of sources. They then will begin to map and categorize the kinds of things that matter to their community in order to identify problems they can solve. Students will learn from both young and old members of their community. This unit is a good way to build on the concept of perspective taking.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_CommunityPerspectives.pdf',NULL),
-- 	(43,'Finding Your Why',10,100,'feel','awareness','middle_school,high_school','45','It is important to understand your motivation for making a change in the community. You will need to understand this in order to get people excited about your ideas for change. In this lesson we will identify what it means to â€œfind your whyâ€ and identify leaders who have been able to design change after understanding the mission behind each action. In culmination students will try and write down a â€œwhyâ€ statement for the action that they hope to take in their community.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_FindingYourWhy.pdf',NULL),
-- 	(44,'Tree of Power',10,100,'feel','awareness,empathy','middle_school','60','Once you have identified your problem, it is important to study the influences that directly relate to the problem or thing you are trying to solve. In this lesson we will explore the web of power and influence that may directly or indirectly impact what you are trying to do. Using Martin Luther Kingâ€™s â€œI Have a Dream Speech,â€ students will explore the different forces that worked for and against equality and how Martin Luther King chose to respond in the face of those influences.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_TreeofPower.pdf',NULL),
-- 	(45,'Town Hall',10,100,'feel','engagement,empathy,communication','middle_school,high_school','45','In this lesson, students will role-play the scene at a town hall. They will take on the role of one of the members of the community that they hope to serve and bring up the issue that they are hoping to solve. This activity enables students to pay close attention to who they are serving and why while giving them the opportunity to stand up for what they believe in.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_TownHall.pdf',NULL),
-- 	(46,'Developing the Why & the How',10,100,'imagine','communication,critical thinking,communication,critical thinking,communication,critical thinking','all_ages','all_times','By now students should have picked the problem that they are looking to solve. In this lesson the students will divide into groups and develop a Why-How ladder to begin brainstorming different actions they can take to solve the chosen problem in their community.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_DevelopingtheWhyHow.pdf',NULL),
-- 	(47,'Yes, And! Using Improv to Anchor Brainstorming',10,100,'imagine','collaboration,communication','all_ages','45','Teaching brainstorming through the improv technique helps students to be more open to ideas. In design thinking brainstorming is at the heart of action. This lesson will help you set up a safe culture for brainstorming leading up to the first class-wide brainstorm about the actions that they want to take in the community.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_YesAndImprov.pdf',NULL),
-- 	(48,'Impact Segments',10,100,'imagine','empathy,collaboration,communication,creativity','middle_school,high_school','60','In this lesson the students will use the concepts of â€œcustomer segmentationâ€ to figure out the types of people they will be impacting in their design. They will use this understanding of who they are serving to ensure that their action plan is one that will truly benefit the people that they are hoping to serve.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_ImpactSegments.pdf',NULL),
-- 	(49,'Mapping Your Needs',10,100,'imagine','critical thinking','middle_school,high_school','60','This lesson builds on the previous lesson on impact segments. Using the segment and the ideas for impact, students will design a roadmap based on the things they can do to have the greatest impact.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_MappingYourNeeds.pdf',NULL),
-- 	(50,'Accessing Your Resources',10,100,'imagine','collaboration,communication','all_ages','45','Now that you have figured out the change you want to make, and the resources you will need, it is time to make a plan for accessing those resources and pulling off your project. In this lesson students will brainstorm how they will go about finding the resources that they will need and developing a plan for action.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_AccessingYourResources.pdf',NULL),
-- 	(51,'Prototyping Your Community\'s Solution',10,100,'do','communication,creativity,reflection','all_ages','45','In this lesson we teach students about prototyping as a way to test their solution. Prototyping is a part of design thinking because it helps you to create a more powerful design and impact. In this lesson you will have students think about what kinds of questions or assumption that they have about their solution and develop a prototype to solve it.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_PrototypingYourCommunitysSolution.pdf',NULL),
-- 	(52,'Follow Up Questions',10,100,'do','communication,creativity,reflection','middle_school,high_school','45','Based on the â€œPrototyping your Solutionâ€ lesson, students came up with questions that they still needed to test. In this lesson you will expose students to a few different ways to prototype and let them develop a prototype and solution to their own questions.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_FollowUpQuestions.pdf',NULL),
-- 	(53,'What is Leadership?',10,100,'do','collaboration,communication,critical thinking','all_ages','60','In this activity students will do an activity that requires them to take on different leadership roles within the group. We will use this experience to talk about what it means to be a leader and what it means to be a part of a team. They will use this knowledge as they begin designing their leadership plan in the following lesson.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_WhatisLeadership.pdf',NULL),
-- 	(54,'Teamwork Action Plan',10,100,'do','collaboration,communication,initiative,responsibility','middle_school,high_school','60','For a change to be effective, each person needs to have a role and the roles need to work together. Once you have defined your problem, analyzed what resources you need and prototyped your solutions to make sure that they are right, you will need to have the students develop an action plan for the day (or days) that you will actually be in your community.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_TeamworkActionPlan.pdf',NULL),
-- 	(55,'Prototyping Your Change',10,100,'do','communication,creativity,reflection','all_ages','60','Now that you have a developed and are ready to go, it is important to do a trial run to make sure that everyone know their roles and is ready to take on the leadership and action plan successfully. Students will prototype their solution by role playing aspects of the day. They will analyze their success by using â€œI like, I wish, What if...â€','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_PrototypingYourChange.pdf',NULL),
-- 	(56,'Using Storytelling',10,100,'share','communication,creativity,reflection,communication,creativity,reflection','middle_school,high_school','60','Storytelling is an integral part of all cultures and it is often used for educating people or telling the story of a culture or tradition. In this lesson students will learn about the elements of storytelling as a way to tell the story of their own action in the community either from their own perspective or from the perspective of the people that they served.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_UsingStorytelling.pdf',NULL),
-- 	(57,'Leadership Stories',10,100,'do','collaboration,creativity,reflection','all_ages','60','Over the course of the project the students has the opportunity to learn a lot about leadership. In this activity, students will have the opportunity to share the greatest things that they learned about leadership and develop a mural based on the what they have learned.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_LeadershipStories.pdf',NULL),
-- 	(58,'Community Stories',10,100,'do','communication,creativity,reflection','all_ages','60','Throughout this process the students have been active in the community, learning about the problems, prototyping their solution and actually going out and creating change in their community. In this lesson students will have the opportunity to check back in with those members of the community and share what they have done.\n','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_CommunityStories.pdf',NULL),
-- 	(59,'Heroes Among Us',10,100,'do','communication,creativity,reflection','elementary,middle_school','60','In this lesson, students will have the opportunity to recognize each other for the hard work that they did together. Students will have the opportunity to reflect on their peers and highlight the things that they did during the project that were commendable.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_HeroesAmongUs.pdf',NULL),
-- 	(60,'TED Community Talks',10,100,'do','communication,reflection','all_ages','all_times','This lesson will walk you through the steps of preparing students to give a TED-like talk to present their project to the greater community. Each student will have 2-3 minutes to share a story from the experience or something they learned along the way.','https://dfcusa_pm.s3.amazonaws.com/content/Lesson_TEDCommunityTalks.pdf',NULL);

-- /*!40000 ALTER TABLE `activities` ENABLE KEYS */;
-- UNLOCK TABLES;


-- # Dump of table activities_comments
-- # ------------------------------------------------------------

-- DROP TABLE IF EXISTS `activities_comments`;

-- CREATE TABLE `activities_comments` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `activity_id` int(11) DEFAULT NULL,
--   `user_id` int(11) DEFAULT NULL,
--   `text` text,
--   `timestamp` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;



-- # Dump of table content
-- # ------------------------------------------------------------

-- DROP TABLE IF EXISTS `content`;

-- CREATE TABLE `content` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `stage` varchar(256) DEFAULT NULL,
--   `fids_stage` tinyint(1) DEFAULT NULL,
--   `deliverables` tinyint(1) DEFAULT NULL,
--   `content_obj` longtext,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LOCK TABLES `content` WRITE;
-- /*!40000 ALTER TABLE `content` DISABLE KEYS */;

-- INSERT INTO `content` (`id`, `stage`, `fids_stage`, `deliverables`, `content_obj`)
-- VALUES
-- 	(1,'welcome',0,0,'{\"content\":\"<h1>Getting Started<\\/h1>\\n<p><span style=\\\"font-size: 12pt; line-height: 23pt;\\\">Design for Change is a program that challenges young people to design and implement social change projects in their communities.&nbsp;<\\/span><\\/p>\\n<h1>Mission:<\\/h1>\\n<p>Our mission is to ensure that young minds have the opportunities and mentorship to strengthen and apply their character, capacity, and confidence.<\\/p>\\n<h1>Format:<\\/h1>\\n<ul><li>So how do we do this? Well, we believe that when relevant and impactful learning experiences are combined with mentorship, young people can become active contributors to their communities.&nbsp;<\\/li><li><span style=\\\"font-size: 12pt; line-height: 23pt;\\\">Through a simple four strep process, Feel, Imagine, Do, and Share, Design for Change provides a simple framework for young people to create, implement, and share a project that has a positive impact on their community.<\\/span><\\/li><li><span style=\\\"font-size: 12pt; line-height: 23pt;\\\">Among other things, these stages develop EMPATHY, CREATIVITY, INITIATIVE, and COLLABORATION - culminating in meaningful social change!<\\/span><\\/li><\\/ul>\\n<h1>Mentorship:<\\/h1>\\n<ul><li>What else do they need? &nbsp;YOU! In the world of DFC, you are now a Change Mentor, providing guidance to your team of young people as they move through their DFC project. You will help them develop their skills in the real world, building their confidence, and encouraging them to grow as makers of change.<\\/li><li><span style=\\\"font-size: 12pt; line-height: 23pt;\\\">We will provide you with knowledge, activities, training, and support throughout this portal - empowering you with the tools you need to guide your team in successfully implementing their DFC project.&nbsp;<\\/span><\\/li><\\/ul>\\n<p>We are excited to have you on board!<\\/p><button class=\\\"btn btn-success btn-lg newProject\\\"><i class=\\\"fa fa-plus\\\"><\\/i> Create Your First Project<\\/button>\"}'),
-- 	(2,'home',0,0,'{\"content\":\"<h1>Hello! Welcome to our Design for Change portal. <\\/h1><p><span style=\\\"font-size: 12pt; line-height: 23pt;\\\">Design for Change is a program that challenges youth to design and implement social change projects in their communities. Our mission is to ensure that youth have the opportunities and mentorship to strengthen and apply their character, capacity, and confidence.<\\/span><\\/p><p>So how do we do this? Well, we believe that young people need both relevant, impactful experiences as well as guidance to become empowered contributors to their communities. Here at Design for Change, we even call our youth participants \\\"Change Makers\\\" - letting them know from the very beginning that we believe in their abilities to make and create an impact. <\\/p><p>So, Design for Change is that critical learning experience by providing the challenge to create, implement, and share a project to change their community.<\\/p><p>What else do they need? YOU! You are our Change Mentor, providing the guidance for your team of youth to develop their skills in the real world, building their confidence, and growing as makers of change.<\\/p><p>DFC depends on you and all other Change Mentors to take youth through a simple four-step process called Feel Imagine Do Share. Among other things, these stages develop your team\'s abilities in EMPATHY, CREATIVITY, INITIATIVE, and COLLABORATION - culminating in an amazing project that solves a problem in your community.<\\/p><p>We will provide you with knowledge, activities, training, and support throughout this portal - empowering you with the tools to guide your youth to create change. We\'re excited to have you on board!<\\/p>\"}'),
-- 	(3,'feel',1,1,'{\"getting_started\":{\"text\":\"<h1>The FEEL Stage<\\/h1><p>In FEEL your Change Makers will develop a heightened awareness of themselves and their surroundings which will lead them to feel a stronger sense of empathy - the ability to relate to, and take other people\'s perspective.Together awareness, empathy and working on meaningful real world issues will lead to increased engagement - change makers who will be intrinsically motivated to create positive change in their own communities.Now let\'s get out there and empathize!<\\/p>\",\"video\":\"\"},\"why\":{\"text\":\"<h1>Why FEEL?<\\/h1> <p> The FEEL stage is the critical first step to building character, capacity, and confidence as a creative problem solver. Awareness, empathy, and engagement are crucial skills to build the motivation of your young Change Makers to act as well as understanding how to act in the right way.<\\/p><p>As you know, design thinking is a problem-solving process that places the community at the center of finding solutions to problems. The best way to solve challenges is to first understand all aspects of the problem and empathize with the people that are affected by the issue.<\\/p><p>You will help your team of young people investigate what is happening around them, eventually moving them to feel a sense of empathy for the thoughts, needs, and motivations of the people they are trying to serve. It will be critical for your Change Makers to continuously engage with the community and to understand the core issue from their perspective. This will not only strengthen their capacity to FEEL, it will help them arrive at a more informed solution. <\\/p><p>Check out some research and resources below to help you in the FEEL stage!<\\/p> <h3>Empathy in Design Thinking<\\/h3> <ul> <li><a href=\\\"http:\\/\\/joeyaquino.wordpress.com\\/2012\\/05\\/23\\/want-a-crash-course-in-stanfords-design-thinking-here-it-is-for-free-pt-1-empathy\\/\\\" style=\\\"font-size: 14px;\\\">http:\\/\\/joeyaquino.wordpress.com\\/2012\\/05\\/23\\/want-a-crash-course-in-stanfords-design-thinking-here-it-is-for-free-pt-1-empathy\\/<\\/a><\\/li> <li><a href=\\\"http:\\/\\/designthinking.ideo.com\\/?p=1008\\\" style=\\\"font-size: 14px;\\\">http:\\/\\/designthinking.ideo.com\\/?p=1008<\\/a><\\/li> <\\/ul> <h3>Empathy in the Classroom<\\/h3> <p><\\/p> <ul> <li><a href=\\\"http:\\/\\/www.tolerance.org\\/supplement\\/developing-empathy-high-school\\\" style=\\\"font-size: 14px;\\\">http:\\/\\/www.tolerance.org\\/supplement\\/developing-empathy-high-school<\\/a><\\/li> <li><a href=\\\"http:\\/\\/www.forbes.com\\/sites\\/ashoka\\/2012\\/09\\/26\\/why-we-should-teach-empathy-to-improve-education-and-test-scores\\/\\\" style=\\\"font-size: 14px;\\\">http:\\/\\/www.forbes.com\\/sites\\/ashoka\\/2012\\/09\\/26\\/why-we-should-teach-empathy-to-improve-education-and-test-scores\\/<\\/a><\\/li> <li><a href=\\\"http:\\/\\/educationnorthwest.org\\/webfm_send\\/556\\\" style=\\\"font-size: 14px;\\\">http:\\/\\/educationnorthwest.org\\/webfm_send\\/556<\\/a><\\/li> <\\/ul> <h3>The Power of Motivation<\\/h3> <ul> <li><a href=\\\"http:\\/\\/www.cep-dc.org\\/displayDocument.cfm?DocumentID=405\\\" target=\\\"_new\\\">http:\\/\\/www.cep-dc.org\\/displayDocument.cfm?DocumentID=405<\\/a><\\/li> <\\/ul> <h3>Design Thinking Bootcamp<\\/h3> <ul> <li><a href=\\\"http:\\/\\/dschool.stanford.edu\\/wp-content\\/uploads\\/2013\\/10\\/METHODCARDS-v3-slim.pdf\\\" target=\\\"_new\\\">http:\\/\\/dschool.stanford.edu\\/wp-content\\/uploads\\/2013\\/10\\/METHODCARDS-v3-slim.pdf<\\/a><\\/li> <\\/ul>\",\"video\":\"\"},\"skills\":{\"text\":\"<p><\\/p><h1><span style=\\\"font-weight: normal;\\\">FEEL Skills<\\/span><\\/h1><p><\\/p>\",\"skills\":[{\"skill\":\"Empathy\",\"text\":\"<ul>\\n <li>Ability to sense other people\'s emotions and thoughts, especially by imagining someone else\'s perspective in what they are thinking and feeling<br> <\\/li>\\n <li>Empathy allows you to truly understand how and why people are affected by the issues that surround them, and what solutions could truly impact the problem. <\\/li>\\n <\\/ul>\"},{\"skill\":\"Awareness\",\"text\":\"<ul>\\n <li>Ability to show a true understanding of yourself and others, by being conscious of your own thoughts and actions as well as of those around you<\\/li>\\n <li>It is important to be aware of the people, places, and things around you, in order to be conscious and fully sensitive to the problems that you and your community may be facing and what can be used to solve them. <\\/li>\\n <\\/ul>\"},{\"skill\":\"Engagement\",\"text\":\"<ul>\\n <li>Ability to be proactively, attentively, and passionately committed to tasks at hand as well as enthusiastic about interacting with the world around you, because you see how you fit into achieving an end goal. <\\/li>\\n <li>Engagement is critical for motivation - you care about interacting with your community and your team because you see how you are a part of it and how you can change it. <\\/li>\\n <\\/ul>\"}]},\"submit\":{\"text\":\"<p> <\\/p>\\n<h1>Deliverables for FEEL<\\/h1>\\n <p> Please fill out the each of the following statements to continue to the next stage.<\\/p>\",\"deliverables\":[{\"label\":\"Situations\",\"key\":\"situations\",\"explanation\":\"List the situations\\/problems in your school\\/community that bothered you. (option to upload community map.)\",\"form\":\"list\"},{\"label\":\"People\",\"key\":\"people\",\"explanation\":\"Who was affected by the situation\\/problem and what did they say?\",\"form\":\"textarea\"},{\"label\":\"Problem Statement\",\"key\":\"problem_statement\",\"explanation\":\"Define your problem statement: State the problem you chose and why did you CHOOSE it?\",\"form\":\"textarea\"}]}}'),
-- 	(4,'imagine',1,1,'{\"getting_started\":{\"text\":\"<h1>The IMAGINE Stage<\\/h1>\\n<p>Welcome to the IMAGINE stage!<\\/p>\\n<p>Your team has just built their motivation and empathy in identifying the community problem they want to change. Now in this stage, your Change Makers will use their creativity in collaboration with their teammates and the community to think critically about the best solution.<\\/p>\\n<h3>Why do we ask youth to IMAGINE?<\\/h3>\\n<p>First, we want youth to practice divergent thinking - a way to generate ideas that focuses on being creative and exploring as many unique solutions as possible. It\'s easy for us to think there is only one \\\"right\\\" solution to a problem, and just move forward with the first idea that comes to mind because we think it \\\"sounds good enough.\\\"<\\/p>\\n<p>But much more innovative and long-lasting projects can be found when you encourage your Change Makers to come up with and explore all of their wild and crazy ideas. And in discussing those ideas, they will practice collaborating with the team and with the community.<\\/p>\\n<p>Then, once you have several possibilities thought out, your youth will start using convergent thinking - the critical thinking skills needed to hone in on the solution that makes the most sense for your team to solve their problem. You\'ll guide your youth to assess, organize, and prioritize their ideas, as well as their own interests and strengths, to discover how they want to make an impact.<\\/p>\\n<p>In IMAGINE, your Change Makers will develop:<\\/p>\\n<ul><li>an understanding of their own creativity and ways to unlock it, as well as<\\/li>\\n<li>strong collaboration abilities with each other and with their community<\\/li>\\n<li>which will together lead to practicing relevant critical thinking as they figure out how they want to solve their community problem.<\\/li><\\/ul>\\n<p>We\'re excited to see what you can IMAGINE!<\\/p>\",\"video\":\"\"},\"why\":{\"text\":\"<h1>Why IMAGINE<\\/h1> <p>The IMAGINE stage is essential to turning your learnings from empathetic exploration into possible solutions. Creativity, collaboration, and critical thinking are essential components to generating as many awesome ideas and possible, to solve the problem you team has identified as being important. <\\/p><p>The key to the IMAGINE stage is practicing creativity without judgment. As Nobel Prize winner Dr. Linus Pauling said, \\\"The best way to have a good idea is to have lots of ideas.\\\" Often when we\'re trying to solve a problem, we censor ourselves and judge our own thoughts as \\\"good\\\" or \\\"bad\\\" before we even write them down - we don\'t give ourselves the freedom of unbridled creativity. However, once we give ourselves permission to say anything, even if it\'s wild and crazy, we have many amazing ideas as a baseline for selecting a solution.<\\/p><p>When working in a team and collaborating with others, it is critical to support each others\' strengths and welcome everyone\'s thoughts as a way to reach your ultimate goal.<\\/p><p>Only after you have many different ideas to choose from, can you start assessing which ones work best for your team. You will analyze and prioritize your team\'s skills and interests, as well as the feasibility of your most innovative ideas within your particular constraints. This is where you decide how to bring your most unique ideas to life!<\\/p><p>Check out some research and resources below to help you in the IMAGINE stage!<\\/p><h3>Creativity or \\\"Ideation\\\" in Design Thinking<\\/h3><ul><li><a href=\\\"http:\\/\\/news.stanford.edu\\/news\\/2013\\/november\\/kelley-creativity-book-110713.html\\\" targe=\\\"_new\\\">http:\\/\\/news.stanford.edu\\/news\\/2013\\/november\\/kelley-creativity-book-110713.html<\\/a><\\/li><li><a href=\\\"http:\\/\\/www.slideshare.net\\/gaylecurtis\\/structured-ideation-and-design-thinking\\\" target=\\\"_new\\\">http:\\/\\/www.slideshare.net\\/gaylecurtis\\/structured-ideation-and-design-thinking<\\/a><\\/li><\\/ul><h3>Empathy in the Classroom<\\/h3><ul><li><a href=\\\"http:\\/\\/www.ascd.org\\/publications\\/newsletters\\/education-update\\/dec08\\/vol50\\/num12\\/Developing-Students\'-Creative-Skills-for-21st-Century-Success.aspx\\\" target=\\\"_new\\\">http:\\/\\/www.ascd.org\\/publications\\/newsletters\\/education-update\\/dec08\\/vol50\\/num12\\/Developing-Students\'-Creative-Skills-for-21st-Century-Success.aspx<\\/a><\\/li><li><a href=\\\"http:\\/\\/www.edudemic.com\\/creativity-in-the-classroom\\/\\\" target=\\\"_new\\\">http:\\/\\/www.edudemic.com\\/creativity-in-the-classroom\\/<\\/a><\\/li><li><a href=\\\"http:\\/\\/plpnetwork.com\\/2013\\/04\\/24\\/student-creativity-license-limits\\/\\\" target=\\\"_new\\\">http:\\/\\/plpnetwork.com\\/2013\\/04\\/24\\/student-creativity-license-limits\\/<\\/a><\\/li><\\/ul><h3>The Power of Convergent and Divergent Thinking<\\/h3><ul><li><a href=\\\"http:\\/\\/www.problem-solving-techniques.com\\/Convergent-Thinking.html\\\" target=\\\"_new\\\">http:\\/\\/www.problem-solving-techniques.com\\/Convergent-Thinking.html<\\/a><\\/li> <\\/ul>\",\"video\":\"\"},\"skills\":{\"text\":\"<p><\\/p><h1><span style=\\\"font-weight: normal;\\\">IMAGINE Skills<\\/span><\\/h1><p><\\/p>\",\"skills\":[{\"skill\":\"creativity\",\"text\":\"<ul>\\n<li>Ability to generate new, uncommon, unique ideas; the openness and courage to explore ideas; and willingness to listen to one\\u2019s inner voice.<\\/li>\\n<li>Creativity and looking beyond the obvious solutions are what allow you to develop something new that may have an unprecedented impact. <\\/li>\\n<\\/ul>\"},{\"skill\":\"collaboration\",\"text\":\"<ul>\\n<li>Ability to work and cooperate with a team, relying on knowledge and understanding to build on each others\' strengths.<\\/li>\\n<li>Since no one is good at or interested in everything - although we would like to be! - collaboration is how you best support and leverage every team member\'s skills and strengths to achieve your goals.<\\/li>\\n<\\/ul>\"},{\"skill\":\"critical thinking\",\"text\":\"<ul>\\n<li>Ability to use objective analysis and evaluation in order to make a decision on important issues.<\\/li>\\n<li>Once you have a multitude of ideas and goals, critical thinking skills are essential to figuring out how to make them happen in the real world, by organizing, prioritizing, assessing, and planning.<\\/li>\\n<\\/ul>\"}]},\"submit\":{\"text\":\"<h1>Deliverables for IMAGINE<\\/h1>\\n <p> Please fill out the each of the following statements to continue to the next stage.<\\/p>\",\"deliverables\":[{\"label\":\"Brainstorming\",\"key\":\"brainstorming\",\"explanation\":\"List the different solutions you came up with.\",\"form\":\"list\"},{\"label\":\"Your Chosen Solution\",\"key\":\"your_chosen solution\",\"explanation\":\"Which one did you choose to implement and why?\",\"form\":\"textarea\"}]}}'),
-- 	(5,'do',1,1,'{\"getting_started\":{\"text\":\"<h1>The DO Stage<\\/h1>\\n<p>Your team has just decided how they want to solve their problem - now it\'s time to DO it! &nbsp;In this stage, you will hand the reins over to your Change Makers so that they can build their initiative, responsibility, and especially resilience in completing their project. &nbsp;<\\/p>\\n<h3>What do we want youth to learn by DOing?<\\/h3>\\n<p>Change Makers need to see how their motivation and ideas, gained from empathy and creativity, can turn into action. We all have great ideas, but sometimes we struggle in figuring out how to actually make them happen - and we don\\u2019t know if we even have it in us to achieve our goals. The transformation from just the idea of a project to reality depends on developing and understanding our own initiative and responsibility.<\\/p>\\n<p>Initiative is our ability to actually begin and follow through on our goals, while responsibility is making independent decisions and holding ourselves accountable to each other - and us! Once your Change Makers see how to go through the steps of turning idea into action, and setting and accomplishing their own milestones, they will be amazingly equipped to do the same in the future.<\\/p>\\n<p>Even more importantly, you will guide your Change Makers to learn how to be resilient, how to recover and learn from failure. In the real world, very few things work out right the first time, but \\u201cfailure\\u201d isn\\u2019t actually a bad thing - it is the way that you change and retry your ideas to work towards the best possible solution.<\\/p>\\n<h3>In DO, your Change Makers will develop:<\\/h3>\\n<ul>\\n<li>the ability to initiate actions on their own,<\\/li>\\n<li>the responsibility to finish what they started,<\\/li>\\n<li>and the resilience to learn from mistakes and feedback - all crucial for them to succeed in not only this project but as lifelong Change Makers!<\\/li>\\n<\\/ul>\\n<p>Now go DO it!<\\/p>\",\"video\":\"\"},\"why\":{\"text\":\"<h1>Why DO?<\\/h1> <p>In the DO stage you will begin to transform your ideas and planning into action. Initiative, responsibility, and resilience are key to starting and completing your project. During this time, it will be essential for you to maintain a strong relationship with the community you are trying to serve.  <\\/p><p>The DO stage will help you understand that your ideas are valid and your actions can have an impact. During this time, you will be building your initiative and responsibility, and learning valuable skills that can be applied to all aspects of your life. <\\/p><p>However, the most important learning from the DO stage is how to deal with what can be perceived as \\\"failure\\\". In a lot of situations, it feels like you only have one chance to get things right - on a test, a game, or doing homework - and if you do it wrong, you \\\"fail.\\u201d Period. Design thinking, however, focuses and encourages the process of iteration, the reworking of a solution until you are happy with the outcome. The only failure is in not trying at all. <\\/p><p>The first time you try something out, DO not expect it to be perfect. After implementing your chosen action for the first time, you should reflect on everything that went well, and things that didn\\u2019t go as planned. Then, you should evaluable what could be changed in the future so you can make your project better. Your team can then begin to incorporate those learning\\u2019s, and reiterate your original solution. In this way, you will being to see your \\\"failures\\\" as feedback and lessons for the future. <\\/p><p>Check out some research and resources below to help you in the DO stage! <\\/p><h3>Iteration in Design Thinking<\\/h3><ul><li><a href=\\\"http:\\/\\/dthsg.com\\/design-thinking-method\\/\\\" target=\\\"_new\\\">http:\\/\\/dthsg.com\\/design-thinking-method\\/<\\/a><\\/li><\\/ul><h3>Iteration in the Classroom<\\/h3><ul><li><a href=\\\"http:\\/\\/www.fastcodesign.com\\/1670400\\/sparktruck-a-bookmobile-that-brings-rapid-prototyping-to-school-kids#1\\\" target=\\\"_new\\\">http:\\/\\/www.fastcodesign.com\\/1670400\\/sparktruck-a-bookmobile-that-brings-rapid-prototyping-to-school-kids#1<\\/a><\\/li><li><a href=\\\"https:\\/\\/www.youtube.com\\/watch?v=e-2UYN6sE3Y\\\" target=\\\"_new\\\">https:\\/\\/www.youtube.com\\/watch?v=e-2UYN6sE3Y<\\/a><\\/li><li><a href=\\\"http:\\/\\/www.edutopia.org\\/blog\\/design-thinking-betty-ray\\\">http:\\/\\/www.edutopia.org\\/blog\\/design-thinking-betty-ray<\\/a><\\/li><\\/ul><h3>The Power of Failure and Resilience<\\/h3><p><\\/p><ul><li><a href=\\\"http:\\/\\/www.youtube.com\\/watch?v=HhxcFGuKOys\\\" target=\\\"_new\\\">http:\\/\\/www.youtube.com\\/watch?v=HhxcFGuKOys<\\/a><\\/li><li><a href=\\\"http:\\/\\/nymag.com\\/news\\/features\\/27840\\/\\\" target=\\\"_new\\\">http:\\/\\/nymag.com\\/news\\/features\\/27840\\/<\\/a><\\/li><li><a href=\\\"http:\\/\\/www.youtube.com\\/watch?v=zMB_NI50uME\\\" target=\\\"_new\\\">http:\\/\\/www.youtube.com\\/watch?v=zMB_NI50uME<\\/a><\\/li><li><a href=\\\"http:\\/\\/www.theatlantic.com\\/sponsored\\/dell-power\\/2014\\/03\\/power-of-failing\\/99\\/\\\" target=\\\"_new\\\">http:\\/\\/www.theatlantic.com\\/sponsored\\/dell-power\\/2014\\/03\\/power-of-failing\\/99\\/<\\/a><\\/li><li><a href=\\\"http:\\/\\/www.huffingtonpost.com\\/justin-snider\\/the-transformative-power-_b_740394.html\\\" target=\\\"_new\\\">http:\\/\\/www.huffingtonpost.com\\/justin-snider\\/the-transformative-power-_b_740394.html<\\/a><\\/li><\\/ul>\",\"video\":\"\"},\"skills\":{\"text\":\"<p><\\/p><h1><span style=\\\"font-weight: normal;\\\">DO Skills<\\/span><\\/h1><p><\\/p>\",\"skills\":[{\"skill\":\"initiative\",\"text\":\"<ul>\\n<li>Ability to actually begin and follow through on our goals.<\\/li>\\n<li>Initiative is the drive to turn ideas into reality, and is the crucial skill of believing that your ideas are worth developing and deciding to act.<\\/li>\\n<\\/ul>\"},{\"skill\":\"responsibility\",\"text\":\"<ul>\\n<li>Ability to make independent decisions and hold ourselves accountable to each other and ourselves.<\\/li>\\n<li>Practicing responsibility means you understand your role in taking care of things and accept the consequences of your actions. Being responsible means you can accept and learn from your mistakes, all while building strong relationships with your team that knows they can depend on you.&nbsp;<\\/li>\\n<\\/ul>\"},{\"skill\":\"resilience\",\"text\":\"<ul>\\n<li>Ability to learn and recover from criticisms, setbacks, struggles, and failure.<\\/li>\\n<li>Resilience is essential for understanding failure not as a reflection of personal weakness, but as a learning experience, which will allow you to improve upon your past ideas for the better.<\\/li>\\n<\\/ul>\"}]},\"submit\":{\"text\":\"<h1>Deliverables for DO<\\/h1>\\n <p> Please fill out the each of the following statements to continue to the next stage.<\\/p>\",\"deliverables\":[{\"label\":\"Action Plan\",\"key\":\"action_plan\",\"explanation\":\"Describe your action plan.\",\"form\":\"textarea\"},{\"label\":\"Impact\",\"key\":\"impact\",\"explanation\":\"How was the implementation of your project? What was the impact?\",\"form\":\"textarea\"}]}}'),
-- 	(6,'share',1,1,'{\"getting_started\":{\"text\":\"<h1>The SHARE Stage<\\/h1>\\n<p>Welcome to the last and final stage, SHARE!<\\/p>\\n<p>Congratulations! Now that you have almost completed or already finished your project, it\\u2019s time to SHARE it with the community. Through reflection, connection, and communication, your team will spread the news of your impact and INSPIRE others to take on projects of their own!&nbsp;<\\/p>\\n<h3>Why is it so important to SHARE?<\\/h3>\\n<p>Throughout this Design for Change process, you and your team have been developing tools and skills to not only finish this one project, but bring about ongoing change - change caused by your Change Makers, but also by those inspired by them.&nbsp;<\\/p>\\n<p>In order to gather our thoughts and prepare to use our skills in the future, first we need to reflect. During reflection, we think about our entire journey from start to finish, both in the actions we have taken but also the lessons we have learned. &nbsp;Revisiting the bigger picture helps us get ready to apply those learnings in other situations.&nbsp;<\\/p>\\n<p>Once your team has thought about and discovered the long-term changes in themselves, they can bring those lessons before the community. In this way they will inspire other youth and adults like them to take on their own projects of change! Your teams will revisit their empathetic abilities to connect with members of their community and communicate - in writing, speaking, music, anything they want! - the work they have done and that others can do as well.&nbsp;<\\/p>\\n<p>In SHARE, your Change Makers will:<\\/p>\\n<ul>\\n<li>reflect on their project, their impact, and their growth<\\/li>\\n<li>which will help them make connections between the work they have done and the community they did it in<\\/li>\\n<li>Together they will finally communicate with the community and inspire others to be the change!<\\/li>\\n<\\/ul>\\n<p>Go SHARE your work with the world!<\\/p>\",\"video\":\"\"},\"why\":{\"text\":\"<h1>Why SHARE?<\\/h1> <p>The SHARE stage is where you tell the world about what you have done - and how others can do it too! Reflection, connection, and communication are skills essential to being able to inspire others to take on projects of change, just as you have!<\\/p><p>All along, you have been using design thinking to solve problems in the community. Sharing is the final piece of the puzzle. It is your opportunity to present your hard and all that you have accomplished. Too often, people keep their ideas and successes a \\u201cbest kept secret\\u201d because they fear they are bragging or boasting. Sometimes, people don\\u2019t even know how and with whom they should share their project with. <\\/p><p>The goal of Share is to carefully and thoughtfully contribute to your community\\u2019s growth by discussing the problem you chose, how you went about solving it, and the lessons you learned along the way. <\\/p><p>At the end of the SHARE stage, you and your team should take time to reflect on what you have learned, if you think you were successful, and the impact you made. <\\/p><p>Remember, you and your team have started an extraordinary journey of change, a journey with no beginning nor end, but instead, a cycle of amazing impact that will inspire others around the world!<\\/p><p>Check out some research and resources below to help you in the DO stage!<\\/p><h3>Communicating in Design Thinking<\\/h3><ul><li><a href=\\\"http:\\/\\/designthinking.ideo.com\\/?p=1150\\\" target=\\\"_new\\\">http:\\/\\/designthinking.ideo.com\\/?p=1150<\\/a><\\/li><li><a href=\\\"http:\\/\\/everydayinfluence.typepad.com\\/everyday_influence\\/2010\\/06\\/design-thinking-for-innovative-communication-strategies.html\\\">http:\\/\\/everydayinfluence.typepad.com\\/everyday_influence\\/2010\\/06\\/design-thinking-for-innovative-communication-strategies.html<\\/a><\\/li><\\/ul><h3>Communication in the Classroom<\\/h3><ul><li><a href=\\\"http:\\/\\/www.cehd.umn.edu\\/ceed\\/publications\\/tipsheets\\/preschoolbehavior\\/posclass.pdf\\\" target=\\\"_new\\\">http:\\/\\/www.cehd.umn.edu\\/ceed\\/publications\\/tipsheets\\/preschoolbehavior\\/posclass.pdf<\\/a><\\/li><li><a href=\\\"http:\\/\\/www.hdi.uky.edu\\/media\\/default\\/documents\\/research\\/researchbrief_summer2013.pdf\\\" target=\\\"_new\\\">http:\\/\\/www.hdi.uky.edu\\/media\\/default\\/documents\\/research\\/researchbrief_summer2013.pdf<\\/a><\\/li><li><a href=\\\"http:\\/\\/www.kumon.co.uk\\/blog\\/the-importance-of-children-developing-good-communication-skills\\/\\\" target=\\\"_new\\\">http:\\/\\/www.kumon.co.uk\\/blog\\/the-importance-of-children-developing-good-communication-skills\\/<\\/a><\\/li><\\/ul><h3>The Power of Inspiration<\\/h3><ul><li><a href=\\\"http:\\/\\/eduniverse.org\\/power-inspiration\\\" target=\\\"_new\\\">http:\\/\\/eduniverse.org\\/power-inspiration<\\/a><\\/li><li><a href=\\\"http:\\/\\/thebeawesomeblog.com\\/2013\\/09\\/15\\/the-power-of-inspiration\\/\\\" target=\\\"_new\\\">http:\\/\\/thebeawesomeblog.com\\/2013\\/09\\/15\\/the-power-of-inspiration\\/<\\/a><\\/li> <\\/ul>\",\"video\":\"\"},\"skills\":{\"text\":\"<p><\\/p><h1><span style=\\\"font-weight: normal;\\\">SHARE Skills<\\/span><\\/h1><p><\\/p>\",\"skills\":[{\"skill\":\"reflection\",\"text\":\"<ul>\\n<li>Ability to carefully and seriously consider your experiences as well as your thoughts about them, and how well your efforts worked and why.<\\/li>\\n<li>Reflection serves as the bridge between experiences and learning from them. Taking a step back and thinking about the whole process will allow you to process your thoughts, feelings, and actions moving forward.&nbsp;<\\/li>\\n<\\/ul>\"},{\"skill\":\"connection\",\"text\":\"<ul>\\n<li>Ability to associate one\'s own emotional, mental, and educational learnings and experiences with needs of the community and the future.<\\/li>\\n<li>Understanding connection allows you to communicate your ideas to others in order to teach and inspire the same sort of learnings in the rest of the community.<\\/li>\\n<\\/ul>\"},{\"skill\":\"communication\",\"text\":\"<ul>\\n<li>Ability to meaningfully exchange and convey information, through speech, writing, behavior, etc.<\\/li>\\n<li>Communication is the essential skill in driving your ideas and actions of change forward, showing your awareness of all other skills in inspiring the same growth in others.<\\/li>\\n<\\/ul>\"}]},\"submit\":{\"text\":\"<h1>Deliverables for SHARE<\\/h1>\\n <p> Please fill out the each of the following statements to continue to complete your project!<\\/p>\",\"deliverables\":[{\"label\":\"Reflection\",\"key\":\"reflection\",\"explanation\":\"What did your Change Makers reflect on and learn from this experience?\",\"form\":\"textarea\"},{\"label\":\"Why Your Project\",\"key\":\"why_your project\",\"explanation\":\"How did you choose to share your project with the community and why?\",\"form\":\"textarea\"},{\"label\":\"Upload Video\",\"key\":\"upload_video\",\"explanation\":\"Upload Your FIDS Video!\",\"form\":\"upload\"}]}}');

-- /*!40000 ALTER TABLE `content` ENABLE KEYS */;
-- UNLOCK TABLES;


-- # Dump of table files
-- # ------------------------------------------------------------

-- DROP TABLE IF EXISTS `files`;

-- CREATE TABLE `files` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `project_id` int(11) DEFAULT NULL,
--   `section` varchar(256) DEFAULT NULL,
--   `name` varchar(500) DEFAULT NULL,
--   `url` varchar(500) DEFAULT NULL,
--   `activity_id` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LOCK TABLES `files` WRITE;
-- /*!40000 ALTER TABLE `files` DISABLE KEYS */;

-- INSERT INTO `files` (`id`, `project_id`, `section`, `name`, `url`, `activity_id`)
-- VALUES
-- 	(1,9,'feel','doc','http://s3.amazonaws.com/dfcusa_pm/teams/9/doc.pdf');

-- /*!40000 ALTER TABLE `files` ENABLE KEYS */;
-- UNLOCK TABLES;


-- # Dump of table organizations
-- # ------------------------------------------------------------

-- DROP TABLE IF EXISTS `organizations`;

-- CREATE TABLE `organizations` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(500) DEFAULT NULL,
--   `logo` varchar(500) DEFAULT NULL,
--   `details_obj` text,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LOCK TABLES `organizations` WRITE;
-- /*!40000 ALTER TABLE `organizations` DISABLE KEYS */;

-- INSERT INTO `organizations` (`id`, `name`, `logo`, `details_obj`)
-- VALUES
-- 	(1,'ABC After School Program','123',NULL),
-- 	(2,'LREI',NULL,NULL),
-- 	(3,'Harvard Graduate School of Education',NULL,NULL),
-- 	(4,'Sample',NULL,NULL),
-- 	(5,'Uplift',NULL,NULL),
-- 	(6,'Harvard',NULL,NULL),
-- 	(7,'Citizen Schools',NULL,NULL),
-- 	(8,'Strong Women, Strong Girls',NULL,NULL),
-- 	(9,'Harvard Business School',NULL,NULL),
-- 	(10,'Imagination Foundation',NULL,NULL),
-- 	(11,'Campbell Hall School',NULL,NULL),
-- 	(12,'Los Altos School Board',NULL,NULL);

-- /*!40000 ALTER TABLE `organizations` ENABLE KEYS */;
-- UNLOCK TABLES;


-- # Dump of table projects
-- # ------------------------------------------------------------

-- DROP TABLE IF EXISTS `projects`;

-- CREATE TABLE `projects` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `organization_id` int(11) DEFAULT NULL,
--   `name` varchar(500) DEFAULT NULL,
--   `location` varchar(500) DEFAULT NULL,
--   `category` varchar(500) DEFAULT NULL,
--   `description` text,
--   `profilepic` varchar(500) DEFAULT NULL,
--   `status` int(11) DEFAULT NULL,
--   `start_date` varchar(128) DEFAULT NULL,
--   `end_date` varchar(128) DEFAULT NULL,
--   `current_stage` int(11) DEFAULT NULL,
--   `last_updated` int(11) DEFAULT NULL,
--   `details_obj` text,
--   `files_obj` text,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LOCK TABLES `projects` WRITE;
-- /*!40000 ALTER TABLE `projects` DISABLE KEYS */;

-- INSERT INTO `projects` (`id`, `organization_id`, `name`, `location`, `category`, `description`, `profilepic`, `status`, `start_date`, `end_date`, `current_stage`, `last_updated`, `details_obj`, `files_obj`)
-- VALUES
-- 	(9,1,'Neighborhood Farmstand','Boston, MA','health','We want to start a farmstand in our neighborhood to show people that they can eat fruits and vegetables more. We will get recruit farmers from local producers and invite them to set up a stand every Saturday morning throughout the fall and spring.','/dfcusa-pm/app/webroot/assets/projects/farmstand.png',1,'09/23/2014','09/26/2014',2,1401755172,'{\"deliverables\":{\"feel\":{\"situations\":[\"123\",\"312\",\"c\"],\"people\":\"people\",\"problem_statement\":\"statement\"},\"imagine\":{\"brainstorming\":[\"test\"]}}}','[\"https:\\/\\/dfcusa_pm.s3.amazonaws.com\\/projects\\/9\\/Unit 105 handicap.doc\"]'),
-- 	(10,1,'Recycle and Respect','Dallas, TX','health','We noticed that people don\'t recycle anything in our community. They don\'t know what to recycle and how it helps to clean up the environment. We want to show people how to create a daily habit in recycling.','/dfcusa-pm/app/webroot/assets/projects/recycling.png',1,'09/23/2014','09/26/2014',3,1401755172,'{\"deliverables\":{\"feel\":{\"people\":\"people\",\"problem_statement\":\"statement\",\"situations\":[\"a\",\"\",\"\"]}}}',NULL),
-- 	(11,3,NULL,'',NULL,NULL,'/dfcusa-pm/app/webroot/assets/projects/farmstand.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
-- 	(12,2,NULL,'United States',NULL,NULL,'/dfcusa-pm/app/webroot/assets/projects/recycling.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
-- 	(13,5,NULL,'',NULL,NULL,'/dfcusa-pm/app/webroot/assets/projects/recycling.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
-- 	(14,6,NULL,'',NULL,NULL,'/dfcusa-pm/app/webroot/assets/projects/violence.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
-- 	(15,7,NULL,'United States',NULL,NULL,'/dfcusa-pm/app/webroot/assets/projects/recycling.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
-- 	(16,10,NULL,'',NULL,NULL,'/dfcusa-pm/app/webroot/assets/projects/farmstand.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL);

-- /*!40000 ALTER TABLE `projects` ENABLE KEYS */;
-- UNLOCK TABLES;


-- # Dump of table skills
-- # ------------------------------------------------------------

-- DROP TABLE IF EXISTS `skills`;

-- CREATE TABLE `skills` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `skill` varchar(128) DEFAULT NULL,
--   `color` varchar(128) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LOCK TABLES `skills` WRITE;
-- /*!40000 ALTER TABLE `skills` DISABLE KEYS */;

-- INSERT INTO `skills` (`id`, `skill`, `color`)
-- VALUES
-- 	(1,'awareness','lime'),
-- 	(2,'engagement','teal'),
-- 	(3,'empathy','maroon'),
-- 	(4,'collaboration','tan'),
-- 	(5,'communication','olive'),
-- 	(6,'connection','yellow orange'),
-- 	(7,'creativity','purple'),
-- 	(8,'critical thinking','salmon'),
-- 	(9,'initiative','light red'),
-- 	(10,'reflection','orange'),
-- 	(11,'resilience','forest green'),
-- 	(12,'responsibility','fuchsia');

-- /*!40000 ALTER TABLE `skills` ENABLE KEYS */;
-- UNLOCK TABLES;


-- # Dump of table user_projects
-- # ------------------------------------------------------------

-- DROP TABLE IF EXISTS `user_projects`;

-- CREATE TABLE `user_projects` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `user_id` int(11) DEFAULT NULL,
--   `project_id` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LOCK TABLES `user_projects` WRITE;
-- /*!40000 ALTER TABLE `user_projects` DISABLE KEYS */;

-- INSERT INTO `user_projects` (`id`, `user_id`, `project_id`)
-- VALUES
-- 	(3,1,9),
-- 	(5,6,10),
-- 	(6,8,11),
-- 	(7,7,12),
-- 	(8,12,13),
-- 	(9,13,14),
-- 	(10,14,15),
-- 	(11,17,16);

-- /*!40000 ALTER TABLE `user_projects` ENABLE KEYS */;
-- UNLOCK TABLES;


-- # Dump of table users
-- # ------------------------------------------------------------

-- DROP TABLE IF EXISTS `users`;

-- CREATE TABLE `users` (
--   `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
--   `organization_id` int(1) DEFAULT NULL,
--   `first_name` varchar(500) DEFAULT NULL,
--   `last_name` varchar(500) DEFAULT NULL,
--   `location` varchar(500) DEFAULT NULL,
--   `email` varchar(500) DEFAULT NULL,
--   `password` varchar(500) DEFAULT NULL,
--   `security_hash` varchar(500) DEFAULT NULL,
--   `type` enum('participant','mentor','admin') DEFAULT 'participant',
--   `status` enum('active','inactive') DEFAULT 'active',
--   `profilepic` varchar(500) DEFAULT NULL,
--   `created_timestamp` int(11) DEFAULT NULL,
--   `lastactive_timestamp` int(11) DEFAULT NULL,
--   `details_obj` text,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- LOCK TABLES `users` WRITE;
-- /*!40000 ALTER TABLE `users` DISABLE KEYS */;

-- INSERT INTO `users` (`id`, `organization_id`, `first_name`, `last_name`, `location`, `email`, `password`, `security_hash`, `type`, `status`, `profilepic`, `created_timestamp`, `lastactive_timestamp`, `details_obj`)
-- VALUES
-- 	(1,1,'Vinay','Gidwaney','Cambridge, MA','vinay.gidwaney@gmail.com','202cb962ac59075b964b07152d234b70','84410d8be11f79869eea756e7cc9df59','mentor','active','https://media.licdn.com/mpr/mpr/shrink_120_120/p/2/000/0fc/2e4/19fe9a0.jpg',NULL,1431528468,NULL),
-- 	(3,NULL,'Sanjli','Gidwaney','Cambridge, MA','admin@designforchange.us','202cb962ac59075b964b07152d234b70','admin','admin','active','http://www.designforchange.us/images/team/sanjli.png',NULL,1431048287,NULL),
-- 	(5,1,'Bob','AF','ab, a','bobab@gmail.com','202cb962ac59075b964b07152d234b70','7d7f00727863507ed2346c53e22da14a','mentor','active',NULL,NULL,1411595601,NULL),
-- 	(6,1,'Claire','Teacher','Dallas, TX','test@tests.com','202cb962ac59075b964b07152d234b70','37a691d73c81c3c5d50bb587e236fd1f','mentor','active','https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTh_Zl9iSWwZ5XfeA4SEi54OtwaMhFwrw4neMMAinfTsY_WmCv',NULL,1411589841,NULL),
-- 	(7,2,'Sherezada','Acosta','United States','sacosta@lrei.org','65c3d574951556b590657dfd4e3592c4','07aafee125c2c7cd9cd5825e5922380b','mentor','active',NULL,NULL,1427985334,NULL),
-- 	(8,3,'Cara','Adams','Cambridge, MA','cch273@mail.harvard.edu','4196f2f0aa07313cfadaaff987bbecd6','7e45fb834450e4089c895b938f80fdad','admin','active',NULL,NULL,1431439724,NULL),
-- 	(9,4,'Sample','Mentor','Cambridge, MA','sample@sample.com','202cb962ac59075b964b07152d234b70','0c58c3cdaf7d146c8efe1e9190261844','mentor','active',NULL,NULL,1425398568,NULL),
-- 	(10,3,'Molly','Levitt','Cambridge, MA','levitt@brightlooplearning.com ','4196f2f0aa07313cfadaaff987bbecd6','7e45fb834450e4089c895b938f80fdad','mentor','active',NULL,NULL,1425865977,NULL),
-- 	(11,3,'Nicole','Ramos','Cambridge, MA','nhr11a@acu.edu ','4196f2f0aa07313cfadaaff987bbecd6','7e45fb834450e4089c895b938f80fdad','mentor','active',NULL,NULL,1425865977,NULL),
-- 	(12,5,'Amanda','Maass','Dallas, Tx','maass.amanda@gmail.com','7df905156264af9d4f67ecb236802e8c','66a44c5b32988d3f162ce39a0baa7fae','mentor','active',NULL,NULL,1426125125,NULL),
-- 	(13,6,'Emily','Holding','Cambridge,MA','emholding16@aol.com','5e764a7475bc21c4766dc2baeefbe176','81ffb9f6444405cdd9648af2638cc34d','mentor','active',NULL,NULL,1426126193,NULL),
-- 	(14,7,'Amy','Hoffmaster','United States','amyhoffmaster@citizenschools.org','0ee966ea184c8ed86309bcc0eec6d8b5','873829891a85e5f98ce902a14334671d','mentor','active',NULL,NULL,1430838064,NULL),
-- 	(15,8,'Mikki','Pugh','United States','mpugh@swsg.org','65acd734b5d3802995563528e22014a9','d78e1a8570cfba27085d19d8a02af8e8','mentor','active',NULL,NULL,1430414240,NULL),
-- 	(16,9,'Hayling','Price','United States','hayling.price@gmail.com','d893bec0d12c3cc68d4fb4aa5e1fce7f','432fde66925d4a4ee5e95e1649130e57','mentor','active',NULL,NULL,1430947173,NULL),
-- 	(17,10,'Alice','Lin','Los Angeles, CA','alice@imagination.is','1347fb854c2daf9cc9089926115fd2ed','bc12646a3b0d200d7fe81156fa07ce05','mentor','active',NULL,NULL,1431369396,NULL),
-- 	(18,11,'Ellen','Pilon','North Hollywood, CA ','pilone@campbellhall.org','f70899980b1ccaa3b046273d119fe992','733a494b3588f1c842aa34d3da40c8da','mentor','active',NULL,NULL,1431533388,NULL),
-- 	(19,12,'Sangeeth','Peruri','United States','sangeethperuri@gmail.com','d78ccffccc57d10af2c6a8ffd06668e9','a0f1c36bb9be02ca59e96ef26f62e5f7','mentor','active',NULL,NULL,1431629332,NULL);

-- /*!40000 ALTER TABLE `users` ENABLE KEYS */;
-- UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
