/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles/landing-style.module.css"
import { useState } from "react"

type CardProps = {
	title: string
	children: React.ReactNode
	logo: string
}

function LandingHeader() {

	const [isEnglish, setIsEnglish] = useState(true)
	const handleLanguageClick = () => {
		setIsEnglish(!isEnglish)
	}

	return (
		<div className="relative">
			<div className={styles.topLeft}></div>
			<div className={styles.headerContainer}>
				<div className={styles.headerLeft}>
					<img
						// src="/logo.png"
						src="/logo-max-white.svg"
						alt="melon"
						className="lt-sm:h-23px h-3.69rem mr-1rem"
					></img>
					{/* <div className={styles.headerTitle}>melon</div> */}
				</div>
				<div className={styles.headerButtonContainer}>
					<button
						className={styles.headerLanguage}
						onClick={handleLanguageClick}
					>
						{/* <img
							src="/images/pages/index/globe.svg"
							alt="Language"
							className="mr-.3125rem lt-xs:w-14px w-2rem"
						></img> */}
						{/* <div className="text-1.25rem font-400 lh-1.25rem">
							{isEnglish ? "EN" : "CN"}
						</div> */}
					</button>
					<div>
						<button
							className={styles.headerButton}
							onClick={() => {
								window.open("https://www.happymelon.club/")
							}}
						>
							Join Us
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

function LandingCard(props: CardProps) {
	return (
		<div className={styles.landingCardContainer}>
			<img
				alt="logo"
				width="153.8px"
				height="153.8px"
				className="m-auto"
				src={props.logo}
			></img>
			<div className={styles.landingCardTitle}>{props.title}</div>
			<div className={styles.landingCardText}>{props.children}</div>
		</div>
	)
}

function LandingContent() {
	return (
		<div className={styles.contentContainer}>
			<div className={styles.page1Container}>
				<div className={styles.page1Shape1}></div>
				<div className={styles.page1Shape2}></div>
				<img
					src="images/pages/index/page1shape4.svg"
					alt=""
					className={styles.page1Shape4}
				></img>
				<div className={styles.page1Title}>
					Socialize with trust and freedom
				</div>
				<div className={styles.page1TitleS}>
					Socialize with trust
					<br />
					and freedom
				</div>
				<div className={styles.page1Text}>
					Melon is an aggregated information platform that combines
					<br />
					decentralized technology and principles.
				</div>
				<div className={styles.page1TextS}>
					Melon is an aggregated information
					<br />
					platform that combines decentralized
					<br />
					technology and principles.
				</div>
				<div className={styles.page1ButtonContainer}>
					<button className={styles.page1Button2} onClick={() => {
						window.open("https://www.happymelon.club/")
					}}>
						Join Us
					</button>
					<div></div>
				</div>
				<img
					alt=""
					style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
					src="/images/pages/index/happymelon.png"
					className={styles.page1Img}
				/>
				<img
					alt=""
					src="images/pages/index/page1shape3.svg"
					className={styles.page1Shape3}
				></img>
			</div>

			<div className={styles.page2Container}>
				<img
					src="images/pages/index/page2shape1.svg"
					alt=""
					className={styles.page2Shape1}
				></img>
				<div className={styles.page2Title}>Engage, Enlighten, Empower</div>
				<div className={styles.page2TitleS}>
					Engage,
					<br /> Enlighten, <br />
					Empower
				</div>
				<div className={styles.page2Text}>
					Our goal is to create a trusted, free, and high-value social network.
					Through mechanisms such as staking, predictions, and token incentives,
					Melon provides you with the ability to express themselves and prevents
					the spread of meaningless information.
				</div>
				<div className={styles.page2TextS}>
					Our goal is to create a trusted, free, and high-value social network.
					Through mechanisms such as staking, predictions, and token incentives,
					Melon provides you with the ability to express themselves and prevents
					the spread of meaningless <br />
					information.
				</div>
			</div>
			<div className={styles.page3Container}>
				<div className={styles.page3Shape}></div>
				<img
					src="images/pages/index/page3shape1.svg"
					alt=""
					className={styles.page3Shape1}
				></img>
				<img
					src="images/pages/index/page3shape2.svg"
					alt=""
					className={styles.page3Shape2}
				></img>
				<img
					src="images/pages/index/page3shape3.svg"
					alt=""
					className={styles.page3Shape3}
				></img>
				<LandingCard
					title="Decentralized Universe"
					logo="/images/pages/index/features-decentralized-universe.png"
				>
					As a service provider, we ensures a secure, anonymous and euphoric
					experience through zk-SNARK Algorithm Encryption, Node-based Storage,
					RSS3, ML Algorithm, and AI Language Models. With us, you can post
					shocking news that you know, share your opinions, and vote for rights
					and freedom.
				</LandingCard>
				<LandingCard
					title="Thriving Web3 Economy"
					logo="/images/pages/index/features-thriving-web3-economy.png"
				>
					We increase the playability of the spreading information by means of
					stake verification, stake prediction, and NFT token-creation, etc.,
					all while promoting the recreation enthusiasm of KOLs. We also expand
					your rights and authorities when you have more tokens collected or
					rank at the top of your interest groups.
				</LandingCard>
				<LandingCard
					title="DAO Consensus"
					logo="/images/pages/index/features-dao-consensus.png"
				>
					We establish consensus in Melon, where we created mechanisms to
					promote a transparent environment for content creation, distribution,
					participation, verification, and feedback. By providing reasonable
					incentives and restrictive rules that support the dual-token model, we
					help you build your credibility and reputation.
				</LandingCard>
			</div>

			<div className={styles.page4Container}>
				<img
					src="images/pages/index/hotspot1.svg"
					alt=""
					className={styles.hotspotShape1}
				></img>
				<img
					src="images/pages/index/hotspot2.svg"
					alt=""
					className={styles.hotspotShape2}
				></img>
				<img
					src="images/pages/index/hotspot3.svg"
					alt=""
					className={styles.hotspotShape3}
				></img>
				<img
					src="/images/pages/index/hotspot-timeline.png"
					alt="hospot"
					className={styles.page4Img}
					style={{ marginTop: "-3rem" }}
				></img>
				<div className={styles.page4TextContainer}>
					<div className={styles.page4TextTitle}>Hotspot Timeline</div>
					<div className={styles.page4TextSubTitle}>
						Systematized Information Display
					</div>
					<div className={styles.page4TextContent}>
						Melon not only provides a decentralized space for sharing and
						accessing information but also aims to structure the complex ocean
						of information and present it to users in an intuitive and effective
						manner through a systematic approach.
						<br />
						<br />
						Melon involves users in the information verification process,
						allowing community members to evaluate or predict any information.
						By harnessing collective wisdom, the platform filters out the most
						valuable and authentic information while addressing errors or
						misleading content.
					</div>
				</div>
			</div>

			<div className={styles.page4Container_wallet}>
				<img
					src="images/pages/index/wallet1.svg"
					alt=""
					className={styles.walletShape1}
				></img>
				<img
					src="images/pages/index/wallet2.svg"
					alt=""
					className={styles.walletShape2}
				></img>
				<img
					src="images/pages/index/wallet3.svg"
					alt=""
					className={styles.walletShape3}
				></img>
				<img
					src="images/pages/index/wallet4.svg"
					alt=""
					className={styles.walletShape4}
				></img>

				<div className={styles.page4TextContainer_wallet}>
					<div className={styles.page4TextTitle}>Melon Wallet</div>
					<div className={styles.page4TextSubTitle}>
						Introduction to the on-chain and off-
						<br />
						chain incentive system
					</div>
					<div className={styles.page4TextContent}>
						Users can utilize centralized identity authentication and earn off-
						chain $Melon rewards generated through platform activities.
						<br />
						<br />
						Off-chain $Melon can be circulated and consumed within the platform,
						such as for subscription payments, purchasing premium content, or
						participating in predictions.
						<br />
						<br />
						Off-chain $Melon is stored on centralized servers and cannot be
						exchanged for fiat currency or other virtual tokens. However,
						transitioning Web 2.0 users can withdraw off-chain $Melon to their
						wallet addresses after establishing their DID, thus embarking on a
						journey into Web3.
					</div>
				</div>
				<img
					src="/images/pages/index/wallet.png"
					alt="hospot"
					className={styles.page4Img_wallet}
				></img>
			</div>
			<div className={styles.page4Container}>
				<img
					src="/images/pages/index/betting-prediction.png"
					alt="hospot"
					className={styles.page4Img_prediction}
				></img>
				<div className={styles.page4TextContainer_prediction}>
					<img
						src="images/pages/index/prediction1.svg"
						alt=""
						className={styles.predictionShape1}
					></img>
					<div className={styles.page4TextTitle}>Betting Prediction</div>
					<div className={styles.page4TextSubTitle}>
						Unique Staking Gameplay
					</div>
					<div className={styles.page4TextContent}>
						Freedom does not imply irresponsibility. While users enjoy the
						interactive capabilities with content, they need to demonstrate that
						their actions provide value rather than engaging in irresponsible
						"keyboard warrior" behavior.
						<br />
						<br />
						Melon hopes that users, in the process of consuming content, are not
						wasting time but rather getting closer to the truth step by step.
						Through the mechanism of staking tokens for content predictions,
						Melon incentivizes insightful and capable users while empowering the
						community to determine the direction of events.
					</div>
				</div>
			</div>

			{/* <div className={styles.page5Container}>
				<img
					src="images/pages/index/page5shape1.svg"
					alt=""
					className={styles.page5Shape1}
				></img>
				<div className={styles.page4TextTitle}>
					Explore immersive AI experience
				</div>
				<div className={styles.page5SubContainer}>
					<div className={styles.page5ImgContainer}>
						<div className={styles.page5ImgBg}></div>
						<img
							alt="app"
							src="/images/pages/index/ai-experience.png"
							className={styles.page5Img}
						></img>
					</div>
					<div className={styles.page5TextContainer}>
						<div className={styles.page5TextSubTitle}>
							Chat With Melon AI Assistant
						</div>
						<div className={styles.page5TextContent}>
							With Melon AI, we help you filter news and articles based on
							specific topics of interest, and automatically clustering similar
							articles or extracting keywords for you, with according public
							opinions.
							<br />
							<br /> By analyzing large volumes of text data from various
							sources such as news articles, social media posts, blogs, and
							forums and applying natural language processing techniques, Melon
							AI can extract key topics, sentiment, and relevant information
							from the text. Moreover, we detect the emotions associated with
							specific topics, in which we can identify positive, negative, or
							neutral sentiment.
						</div>
					</div>
				</div>
			</div> */}

			<div className={styles.page6container}>
				<img
					src="images/pages/index/page6shape1.svg"
					alt=""
					className={styles.page6Shape1}
				></img>
				<div className={styles.page6Shape2}></div>
				<img
					src="images/pages/index/page6shape3.svg"
					alt=""
					className={styles.page6Shape3}
				></img>

				<div className={styles.page6Explore}>More diversity</div>
				<div className={styles.top}>
					<div className={styles.page7dtdcl}>
						<div className="absolute text-2rem font-700 pt-2.8125rem pb-2.375rem">
							Dual-Tone Display
						</div>
						<div className={styles.dtdisplay}>
							<img
								alt=""
								src="/images/pages/index/dual-tone-dark.png"
								className="absolute z-10 w-38.3125rem top-10.675rem left-7.8375rem"
							></img>
							<img
								alt=""
								src="/images/pages/index/dual-tone-light.png"
								className="absolute z-9 w-38.3125rem top-7.375rem left-5.5125rem"
							></img>
						</div>
					</div>
					<div className={styles.page7dtdcl}>
						<div className="absolute text-2rem font-700 pt-2.8125rem pb-2.375rem">
							Cultural Inclusivity
						</div>
						<img
							className="w-48.1875rem mt-7.625rem "
							src="/images/pages/index/cultural-inclusivity.svg"
							alt="country"
						></img>
					</div>
				</div>
				<div className={styles.page7Container}>
					<div className={styles.page7Title}>Modular Design</div>
					<img
						src="/images/pages/index/modular-design.png"
						alt="modular"
						className="w-104.75rem"
					></img>
				</div>
			</div>

			<div className={styles.tech}>
				<img
					src="images/pages/index/techdecshape1.svg"
					alt=""
					className={styles.techdecShape1}
				></img>
				<img
					src="images/pages/index/techdecshape2.svg"
					alt=""
					className={styles.techdecShape2}
				></img>

				<div className={styles.techText}>
					<div className={styles.page4TextTitle}>A Robust Architecture</div>
					<div className={styles.techTextContent}>
						Melon's unique staking and prediction mechanism, along with the
						vision of "socialize with trust and freedom," make the team
						prioritize information security, reliability, and transparency. We
						use zk-SNARKs zero-knowledge proofs and on-chain data storage to
						ensure that users can experience social and content interaction in
						line with our slogan. Additionally, we aim to onboard more Web 2.0
						users into the decentralized world, and we are concurrently
						developing and planning to deploy technologies that reduce
						interaction costs and time, creating a seamless Web3 user
						experience.
					</div>
				</div>

				<div className={styles.techPicture}>
					<div className={styles.CardContainer}>
						<img
							src="/images/pages/index/card-shape.svg"
							alt=""
							className={styles.techCardShape1}
						></img>

						<div className={styles.techCard}>
							<div className={styles.cardText}>
								<div className={styles.techCardTitle}>1 second</div>
								<div className={styles.techCardContent}>Average block time</div>
							</div>
							<div className={styles.techCardImg}>
								<img
									src="/images/pages/index/card-shape-two.svg"
									alt=""
									className={styles.techCardShape2}
								></img>
								<img
									src="/images/pages/index/tech-card-one.svg"
									alt="tech-card"
									className={styles.techImg}
								></img>
							</div>
						</div>
					</div>

					<div className={styles.CardContainer}>
						<img
							src="/images/pages/index/card-shape.svg"
							alt=""
							className={styles.techCardShape1}
						></img>

						<div className={styles.techCard}>
							<div className={styles.cardText}>
								<div className={styles.techCardTitle}>665,695</div>
								<div className={styles.techCardContent}>Total transactions</div>
							</div>
							<div className={styles.techCardImg}>
								<img
									src="/images/pages/index/card-shape-two.svg"
									alt=""
									className={styles.techCardShape2}
								></img>
								<img
									src="/images/pages/index/tech-card-two.svg"
									alt="tech-card"
									className={styles.techImg}
								></img>
							</div>
						</div>
					</div>

					<div className={styles.CardContainer}>
						<img
							src="/images/pages/index/card-shape.svg"
							alt=""
							className={styles.techCardShape1}
						></img>

						<div className={styles.techCard}>
							<div className={styles.cardText}>
								<div className={styles.techCardTitle}>37,487,860</div>
								<div className={styles.techCardContent}>Total blocks</div>
							</div>
							<div className={styles.techCardImg}>
								<img
									src="/images/pages/index/card-shape-two.svg"
									alt=""
									className={styles.techCardShape2}
								></img>
								<img
									src="/images/pages/index/tech-card-three.svg"
									alt="tech-card"
									className={styles.techImg}
								></img>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					width: "100%",
					height: "auto",
					alignContent: "left",
				}}
				className={styles.page8Container}
			>
				<div className={styles.page8Title}>TEAM</div>
				<div className={styles.team}>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750 mt-1rem">Oliver</div>
						<div className={styles.page8Founder}>Founder</div>
						<div className="mt-1.75rem">
							<ul>
								<li>Serial Entrepreneur in Tech</li>
								<li>Former X2E Market Director</li>
								<li>
									TikTok Livestream E-commerce Operation Partner for 0-1
									building and operation
								</li>
								<li>&gt;4 Years of SDE and ML</li>
								<li>Top math instructor of education agency</li>
							</ul>
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750 mt-1rem">Luke</div>
						<div className={styles.page8Founder}>Head of Operations</div>
						<div className="mt-1.75rem">
							<ul className="team_exp">
								<li>Former SaaS Founder</li>
								<li>AI Platform Product & Growth</li>
								<li>Social APP Growth  for  100 Million Users</li>
								<li>Product & Operation Partner for 0-1 Million Users</li>
							</ul>
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750 mt-1rem">Apin  Shen</div>
						<div className={styles.page8Founder}>Head of Product</div>
						<div className="mt-1.75rem">
							<ul className="team_exp">
								<li>&gt;5 Years of product experience in Ali, Dewu</li>
								<li>Serial Entrepreneur in AI&web3 </li>
								<li>Skilled in building projects from 0 to 1, with rich experience in product and operation theory and practice</li>
							</ul>
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750 mt-1rem">Rekko</div>
						<div className={styles.page8Founder}>Head of Marketing</div>
						<div className="mt-1.75rem">
							<ul className="team_exp">
								<li>&gt;6 years of experience in Tencent,vivo</li>
								<li>Specializing in traffic operations and creator development</li>
								<li>Accumulated a large creators base and business resources</li>
							</ul>
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750 mt-1rem">Jeremy</div>
						<div className={styles.page8Founder}>Advisor</div>
						<div className="mt-1.75rem mt-1rem">
							<ul className="team_exp">
								<li>Founder of Redblock</li>
								<li>GP of 42DAO Web3 Investment Fund</li>
								<li>
									Entered the investment field after two startups in Silicon
									Valley in 2015
								</li>
								<li>Former investor at APlus Labs</li>
								<li>Former Director of Investment at UCF Group</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function LandingFoot() {
	return (
		<div className={styles.footContainer}>
			<img
				src="images/pages/index/footshape1.svg"
				alt=""
				className={styles.footShape1}
			></img>
			<img
				src="images/pages/index/footshape2.svg"
				alt=""
				className={styles.footShape2}
			></img>
			<div
				className="items-center"
				style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
			>
				<img
					src="/logo-max-white.svg"
					alt="logo"
					className="w-auto h-4.625rem"
				></img>
				{/* <p className="text-2.625rem font-600">Melon</p> */}
			</div>
			<div className={styles.footText}>
				© Melon 2023 | All Rights Reserved
			</div>
			<div className={styles.footTextS}>
				© Melon 2023 All Rights Reserved
			</div>
		</div>
	)
}
export { LandingContent, LandingFoot, LandingHeader }
