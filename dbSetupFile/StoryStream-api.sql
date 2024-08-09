-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 09, 2024 at 06:38 PM
-- Server version: 5.7.34
-- PHP Version: 8.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `StoryStream-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `apiKeys`
--

CREATE TABLE `apiKeys` (
  `id` int(6) UNSIGNED NOT NULL,
  `userId` varchar(30) NOT NULL,
  `apiKey` varchar(30) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `apiKeys`
--

INSERT INTO `apiKeys` (`id`, `userId`, `apiKey`, `create_date`) VALUES
(8, 'aTzrgQFC4h', 'Stream_kvsQlreL3W', '2024-08-06 08:21:31'),
(13, 'ctcniCvJR0', 'Stream_mEd5UBBxrA', '2024-08-09 14:38:37');

-- --------------------------------------------------------

--
-- Table structure for table `Storybook`
--

CREATE TABLE `Storybook` (
  `id` varchar(30) NOT NULL,
  `title` varchar(30) NOT NULL,
  `body` longtext NOT NULL,
  `author` varchar(30) NOT NULL,
  `data_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Storybook`
--

INSERT INTO `Storybook` (`id`, `title`, `body`, `author`, `data_added`) VALUES
('XxGBQUfHdO', 'The Starlit Amulet', 'In a small village, orphaned Mira discovered an ancient amulet in her grandmother’s attic. When she wore it, she found she could communicate with the stars. Each night, the stars revealed hidden truths and guided her through personal challenges. Mira’s newfound connection with the cosmos helped her solve local mysteries and find her place in the world, proving that even the smallest of people can have a grand impact.\n', 'Eleanor Hayes', '2024-08-05 13:16:57'),
('OwYF0aVEK5', 'The Secret of the Scribe', 'In a medieval kingdom, young scribe Leo uncovered an old manuscript with cryptic writings and symbols. His curiosity led him to discover that the manuscript was a key to an ancient treasure hidden by a long-forgotten order of scholars. Leo’s journey to decipher the clues and find the treasure not only revealed hidden riches but also restored the kingdom’s lost wisdom and fostered a renewed appreciation for learning and history.', 'Benjamin Drake', '2024-08-07 13:45:26'),
('rAJebNAP0D', 'The Dragon’s Heir', 'In a land where dragons were believed to be extinct, teenager Aiden discovered he was the last heir to a dragon lineage. With the help of an ancient dragon companion, he embarked on a quest to restore the dragons to their rightful place in the world. Along the way, Aiden learned about courage, legacy, and the bond between humans and mythical creatures, ultimately bringing balance and unity to his realm.', 'Amelia Cole', '2024-08-07 13:49:44'),
('Qk4mr4l8QS', 'Enigmatic Artist', 'Renowned artist Victor had a unique gift, his paintings could alter reality. When he painted scenes of peace, his city thrived; when he painted scenes of chaos, turmoil ensued. Victor struggled with the responsibility of his power, but with the help of a close friend, he learned to use his art for positive change. His paintings became a source of inspiration and healing, showing that art can shape the world in profound ways.', 'Amelia Cole', '2024-08-07 13:52:39'),
('2Ab3F9RjEO', 'The Last Lightkeeper', 'In the small coastal town of Harborside, there stood a lighthouse that had guided sailors safely for over a century. Its beacon was a symbol of hope and security, cutting through the fog and darkness of the night. But as the years went by, technology advanced, and the lighthouse’s role became less crucial. The town decided to close it down and dismantle it, much to the dismay of the lighthouse keeper, old Mr. Thompson.\n\nMr. Thompson had served as the lighthouse keeper for nearly forty years. He lived in a small cottage beside the lighthouse and took pride in his work, even though the light was no longer as necessary as it once was. With the decision to shut it down, Mr. Thompson was offered a modest pension and asked to leave the cottage.\n\nOn his last night, Mr. Thompson climbed the spiral staircase to the top of the lighthouse one final time. As he reached the top, he looked out over the ocean, which shimmered under the moonlight. The sea seemed to whisper a farewell.\n\nDetermined to honor the lighthouse’s legacy, Mr. Thompson decided to light it one last time. He carefully prepared the old lantern and, with a deep breath, ignited the flame. As the light began to shine, a strange thing happened—the lighthouse’s beam appeared to dance and stretch across the water, forming a brilliant, radiant path.\n\nUnbeknownst to Mr. Thompson, the lighthouse’s light held a magical property. That night, the beam led a ship, lost in a storm, safely to shore. The crew of the ship, though they had GPS and modern navigation tools, saw the beam and were inexplicably drawn to it, feeling a sense of calm and direction.\n\nThe next morning, as the sun rose, the storm cleared, and the ship arrived in Harborside’s harbor. The grateful crew and townspeople learned of the lighthouse keeper’s final act of dedication. The town decided to honor Mr. Thompson’s legacy by preserving the lighthouse as a historical monument and a symbol of hope.\n\nMr. Thompson moved to a quieter village but often visited Harborside. The lighthouse stood tall, its beam still shining with an unexplainable light, guiding not just ships, but also reminding everyone of the enduring power of dedication and hope.', 'Benjamin Drake', '2024-08-07 13:59:25'),
('N2OxiI9Snv', 'The Hidden Sanctuary', 'After moving to a new town, Claire stumbled upon a secret garden hidden behind her new home. The garden was a sanctuary for mythical creatures and magical beings. Claire’s friendship with these inhabitants led to exciting adventures and the discovery of her own latent magical abilities. Together, they faced threats and protected the garden, blending the ordinary with the extraordinary and bringing magic back into the everyday world', 'William Crawford', '2024-08-07 14:03:43'),
('NPjuiZeuOf', 'The Whispering Paintings', 'Art dealer Clara acquired a collection of mysterious paintings that whispered secrets to those who gazed upon them. Each painting told a different story from history, guiding Clara to uncover lost events and forgotten heroes. Through her discoveries, Clara brought new appreciation to these stories and connected the past with the present, teaching others the importance of history and storytelling.', 'Natalie Stone', '2024-08-07 14:06:39'),
('DGdhX82ksR', 'The Clockwork City', 'In a city where everything operated on intricate clockwork mechanisms, young inventor Leo discovered a malfunctioning machine that threatened to halt the city’s operations. As he repaired and redesigned the city’s mechanisms, he uncovered a hidden conspiracy to control the city through its clockwork. Leo’s ingenuity and determination saved the city from disaster and restored its freedom, showing that innovation and bravery can overcome even the most complex challenges.', 'Natalie Stone', '2024-08-07 14:07:24'),
('uZuuiLcoHh', 'The Last Songbird', 'In a world where music had been lost to time, young musician Aiden found a hidden sanctuary where the last songbird sang magical melodies. As Aiden learned the songbird’s songs and shared them with the world, music began to return to society, healing old wounds and inspiring a new generation. Aiden’s journey demonstrated that even a single note could change the world, rekindling the universal language of music.', 'Evan Pierce', '2024-08-07 14:09:32'),
('8ucquSvvBF', 'The Enchanted Bookshop', 'Elena inherited a quaint bookshop that was rumored to be enchanted. She discovered that the books in the shop could transport readers into the worlds they described. As Elena navigated these magical realms, she helped characters and readers alike resolve their conflicts and find their paths. The bookshop became a place where imagination and reality intertwined, enriching the lives of everyone who stepped through its doors.', 'Julia Hart', '2024-08-07 14:11:08'),
('iwIcTKaUYB', 'The Wishful Garden', 'Lila inherited a neglected garden from her aunt, where she found a magical plant that granted wishes when tended with love and care. As Lila nurtured the garden, her own wishes and those of her neighbors began to come true. However, she learned that the true magic lay not in the garden itself but in the kindness and community it fostered. Lila’s garden became a symbol of hope and togetherness, transforming her town in ways she had never imagined.', 'Fiona Maris', '2024-08-07 14:13:56');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(6) UNSIGNED NOT NULL,
  `uniqueId` varchar(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `apiKey` varchar(20) NOT NULL,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `uniqueId`, `username`, `email`, `password`, `apiKey`, `reg_date`) VALUES
(29, 'ctcniCvJR0', 'Danny', 'danny@gmail.com', 'MTIzNDU2Nzg5', 'Stream_mEd5UBBxrA', '2024-08-09 14:38:37'),
(24, 'aTzrgQFC4h', 'Daniel', 'daniel@gmail.com', 'aWFtZGFuaWVs', 'Stream_kvsQlreL3W', '2024-08-06 08:21:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apiKeys`
--
ALTER TABLE `apiKeys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Storybook`
--
ALTER TABLE `Storybook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apiKeys`
--
ALTER TABLE `apiKeys`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
