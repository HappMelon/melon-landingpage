import styles from "../../styles/landing-style.module.css"

type CardProps = {
	title: string
	children: React.ReactNode
	logo: string
}

function LandingHeader() {
	return (
		<div>
			<div className={styles.headerContainer}>
				<div className={styles.headerLeft}>
					<img src="/logo.png" alt="logo" width="auto" height="4.625rem"></img>
					<div className={styles.headerTitle}>Flare Dapp</div>
				</div>
				<div className={styles.headerButtonContainer}>
					<div className={styles.headerLanguage}>
						<img
							src="/images/pages/index/globe.svg"
							alt="Language"
							width="32px"
							className="mr-.3125rem"
						></img>
						<div>EN</div>
					</div>
					<div>
						<button className={styles.headerButton}
							style={{
								borderRadius: "3.125rem",
								background: "linear-gradient(159deg, #F9D423 0%, #F83600 100%)",
								height: "3rem",
								padding: ".6875rem 1.75rem",
								fontSize: "1.125rem",
								fontWeight: "700",
								whiteSpace: "nowrap",
							}}
						>
							Launch Dapp
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
			<img alt="logo" width="153.8px" height="153.8px" className="m-auto" src={props.logo}></img>
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
				<div className={styles.page1Title}>
					Socialize with trust and freedom
				</div>
				<div className={styles.page1TitleS}>
					Socialize with trust 
					<br/>
					and freedom
				</div>
				<div className={styles.page1Text}>
				Flare is an aggregated information platform that combines 
				<br/>
				decentralized technology and principles.
				</div>
				<div className={styles.page1TextS}>
				Flare is an aggregated information<br/>
				 platform that combines decentralized 
				 <br/>technology and principles.
				</div>
				<div className={styles.page1ButtonContainer}>
					<button className={styles.page1Button1}>Launch Dapp</button>
					<button className={styles.page1Button2}>Join Whitelist</button>
				</div>
				<img
					alt=""
					style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
					src="/images/pages/index/flare-dapp.io.png"
					className={styles.page1Img}
				/>
			</div>
			<div className={styles.page2Container}>
				<div className={styles.page2Title}>Engage, Enlighten, Empower</div>
				<div className={styles.page2TitleS}>Engage,<br/> Enlighten, <br/>Empower</div>
				<div className={styles.page2Text}>
					Our goal is to create a trusted, free, and high-value social network. 
					Through mechanisms such as staking, predictions, and token incentives, 
					Flare provides you with the ability to express themselves and prevents 
					the spread of meaningless information.
				</div>
				<div className={styles.page2TextS}>
					Our goal is to create a trusted,
					 free, and high-value social
					network. Through mechanisms
					such as staking, predictions, and
					 token incentives, Flare provides
					 you with the ability to express
					 themselves and prevents the spread of meaningless <br/>information.
				</div>
			</div>
			<div className={styles.page3Container}>
				<div className={styles.page3Shape}></div>
				<LandingCard title="Decentralized Universe" logo="/images/pages/index/features-decentralized-universe.png">
					As a service provider, we ensures a secure, anonymous and euphoric
					
					experience through zk-SNARK Algorithm Encryption, Node-based Storage,
					
					RSS3, ML Algorithm, and AI Language Models. With us, you can post
					
					shocking news that you know, share your opinions, and vote for rights
					
					and freedom.
				</LandingCard>
				<LandingCard title="Thriving Web3 Economy" logo="/images/pages/index/features-thriving-web3-economy.png">
					We increase the playability of the spreading information by means of
					
					stake verification, stake prediction, and NFT token-creation, etc.,
					
					all while promoting the recreation enthusiasm of KOLs. We also expand
					
					your rights and authorities when you have more tokens collected or
					
					rank at the top of your interest groups.
				</LandingCard>
				<LandingCard title="DAO Consensus" logo="/images/pages/index/features-dao-consensus.png">
					We establish consensus in Flare Dapp, where we created mechanisms to
					
					promote a transparent environment for content creation, distribution,
					
					participation, verification, and feedback. By providing reasonable
					
					incentives and restrictive rules that support the dual-token model, we
					
					help you build your credibility and reputation.
				</LandingCard>
			</div>

			<div className={styles.page4Container}>
				<img
					src="/images/pages/index/hotspot-timeline.png"
					alt="hospot"
					className={styles.page4Img} style={{ marginTop: "-3rem" }}
				></img>
				<div className={styles.page4TextContainer}>
					<div className={styles.page4TextTitle}>Hotspot Timeline</div>
					<div className={styles.page4TextSubTitle}>
						Systematized Information Display
					</div>
					<div className={styles.page4TextContent}>
						Flare not only provides a decentralized space for sharing and
						
						accessing information but also aims to structure the complex
						
						ocean of information and present it to users in an intuitive and
						
						effective manner through a systematic approach.
						<br/>
						<br/>
						Flare involves users in the information verification process, 
						
						allowing community members to evaluate or predict any 
						
						information. By harnessing collective wisdom, the platform filters 
						
						out the most valuable and authentic information while addressing 
						
						errors or misleading content.
					</div>
				</div>
			</div>

			<div className={styles.page4Container} >
				<div className={styles.page4TextContainer}>
					<div className={styles.page4TextTitle}>Flare Wallet</div>
					<div className={styles.page4TextSubTitle}>
					Introduction to the on-chain and off-
					<br/>
					chain incentive system
					</div>
					<div className={styles.page4TextContent}>
						Users can utilize centralized identity authentication and earn off-
						
						chain $Flare rewards generated through platform activities.
						<br/>
						<br/>
						Off-chain $Flare can be circulated and consumed within the 
						
						platform, such as for subscription payments, purchasing premium 
						
						content, or participating in predictions.
						<br/>
						<br/>
						Off-chain $Flare is stored on centralized servers and cannot be 
						
						exchanged for fiat currency or other virtual tokens. However, 
						
						transitioning Web 2.0 users can withdraw off-chain $Flare to their 
						
						wallet addresses after establishing their DID, thus embarking on a 
						
						journey into Web3.
					</div>
				</div>
				<img
					src="/images/pages/index/wallet.png"
					alt="hospot"
					className={styles.page4Img}
				></img>
			</div>
			<div className={styles.page4Container}>
				<img
					src="/images/pages/index/betting-prediction.png"
					alt="hospot"
					className={styles.page4Img}
				></img>
				<div className={styles.page4TextContainer}>
					<div className={styles.page4TextTitle}>Betting Prediction</div>
					<div className={styles.page4TextSubTitle}>Unique Staking Gameplay</div>
					<div className={styles.page4TextContent}>
						Freedom does not imply irresponsibility. While users enjoy the 
						
						interactive capabilities with content, they need to demonstrate 
						
						that their actions provide value rather than engaging in 
						
						irresponsible "keyboard warrior" behavior.
						<br/>
						<br/>
						Flare hopes that users, in the process of consuming content, are 
						
						not wasting time but rather getting closer to the truth step by 
						
						step. Through the mechanism of staking tokens for content 
						
						predictions, Flare incentivizes insightful and capable users while 
						
						empowering the community to determine the direction of events.
					</div>
				</div>
			</div>

			<div className={styles.page5Container}>
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
							Chat with flare AI assistant
						</div>
						<div className={styles.page5TextContent}>
							With Flare AI, we help you filter news and articles based on
							specific topics of interest, and automatically clustering similar
							articles or extracting keywords for you, with according public
							opinions.
							<br />
							<br /> By analyzing large volumes of text data from various
							sources such as news articles, social media posts, blogs, and
							forums and applying natural language processing techniques, Flare
							AI can extract key topics, sentiment, and relevant information
							from the text. Moreover, we detect the emotions associated with
							specific topics, in which we can identify positive, negative, or
							neutral sentiment.
						</div>
					</div>
				</div>
			</div>
			<div className={styles.page6container}>
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
								className="absolute z-9 w-42.3125rem top-5.575rem left-3.3125rem"
							></img>	

								
						</div>
					</div>
					<div className={styles.page7dtdcl}>
						<div className="absolute text-2rem font-700 pt-2.8125rem pb-2.375rem">Cultural Inclusivity</div>
						<img
							className="w-48.1875rem mt-7.625rem "
							src="/images/pages/index/cultural-inclusivity.svg"
							alt="country"
						></img>
					</div>
				</div>
				<div className={styles.page7Container}>
					<div className={styles.page7Title}>Modular Design</div>
					<img src="/images/pages/index/modular-design.png" alt="modular" className="w-104.75rem"></img>
				</div>
			</div>


			<div className={styles.tech}> 
				<div className={styles.techText}>
					<div className={styles.page4TextTitle}>A Robust Architecture</div>
					<div className={styles.techTextContent}>
						Flare's unique staking and prediction mechanism, along with the vision 
						of "socialize with trust and freedom," make the team prioritize information 
						security, reliability, and transparency. We use zk-SNARKs zero-knowledge 
						proofs and on-chain data storage to ensure that users can experience social 
						and content interaction in line with our slogan. Additionally, we aim to onboard 
						more Web 2.0 users into the decentralized world, and we are concurrently 
						developing and planning to deploy technologies that reduce interaction 
						costs and time, creating a seamless Web3 user experience.
					</div>
				</div>

				<div className={styles.techPicture}>
					<div className={styles.CardContainer}>
						<img src="/images/pages/index/card-shape.svg" alt="" className={styles.techCardShape1}></img>
						
						<div className={styles.techCard}>
							<div className={styles.cardText}>
								<div className={styles.techCardTitle}>1 second</div>
								<div className={styles.techCardContent}>Average block time</div>
							</div>
							<div className={styles.techCardImg}>
							<img src="/images/pages/index/card-shape2.svg" alt="" className={styles.techCardShape2}></img>
								<img src="/images/pages/index/tech-card-1.svg" alt="tech-card" className={styles.techImg}></img>
							</div>
						</div>
							
					</div>

					<div className={styles.CardContainer}>
						<img src="/images/pages/index/card-shape.svg" alt="" className={styles.techCardShape1}></img>
						
						<div className={styles.techCard}>
							<div className={styles.cardText}>
								<div className={styles.techCardTitle}>665,695</div>
								<div className={styles.techCardContent}>Total transactions</div>
							</div>
							<div className={styles.techCardImg}>
							<img src="/images/pages/index/card-shape2.svg" alt="" className={styles.techCardShape2}></img>
								<img src="/images/pages/index/tech-card-2.svg" alt="tech-card" className={styles.techImg}></img>
							</div>
						</div>
							
					</div>

					<div className={styles.CardContainer}>
						<img src="/images/pages/index/card-shape.svg" alt="" className={styles.techCardShape1}></img>
						
						<div className={styles.techCard}>
							<div className={styles.cardText}>
								<div className={styles.techCardTitle}>37,487,860</div>
								<div className={styles.techCardContent}>Total blocks</div>
							</div>
							<div className={styles.techCardImg}>
								<img src="/images/pages/index/card-shape2.svg" alt="" className={styles.techCardShape2}></img>
								<img src="/images/pages/index/tech-card-3.svg" alt="tech-card" className={styles.techImg}></img>
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
				<div className={styles.page8Title}>FOUNDER TEAM</div>
				<div className={styles.team}>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750">Oliver Wang</div>
						<div className={styles.page8Founder}>Founder</div>
						<div className="mt-1.75rem">
							Serial Entrepreneur in web2&3, 4+ <br />
							years of Growth Manager/ <br />
							Operation Manager <br />
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750">Rice Cao</div>
						<div className={styles.page8Founder}>Tech Advisor</div>
						<div className="mt-1.75rem">
							Former Tech Lead at Tiktok. <br />
							5 years of web2 full-stack <br />
							practical business scenario <br />
							development experience. <br />
							2 years of Ethereum smart <br />
							contract development <br />
							experience
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750">Jokereven</div>
						<div className={styles.page8Founder}>Founding Engineer</div>
						<div className="mt-1.75rem">
						Front-end developer / Web3 <br />
						developer 
							
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750">Ning</div>
						<div className={styles.page8Founder}>Full Stack/ML</div>
						<div className="mt-1.75rem">
							full stack/ML--15 years of <br />
							experience in multiple tech areas <br />
							and companies, including Google, Microsoft, etc. Still passionate{" "}
							<br />
							about new ideas.
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750">Serafina Yu</div>
						<div className={styles.page8Founder}>Head of Product & Design</div>
						<div className="mt-1.75rem">
							Serial Entrepreneur, strategic 
							<br/>product manager, 3+ years of
							<br/>web3+AI experience.
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750">Rekko</div>
						<div className={styles.page8Founder}>Staff Product Manager</div>
						<div className="mt-1.75rem">
							Web3 Serial Entreprenuer, 
							<br/>
							SeeDAO Web3 University S1/S2 
							<br/>Speaker, DAO Governance <br/>Engineer
						</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750">Lena</div>
						<div className={styles.page8Founder}>Chief Strategy Officer</div>
						<div className="mt-1.75rem">Web3 Investor</div>
					</div>
					<div className={styles.page8Item}>
						<div className="text-1.75rem font-750">Dr. Hunter</div>
						<div className={styles.page8Founder}>Angel Investor</div>
						<div className="mt-1.75rem">Angel Investor from Harvard</div>
					</div>
				</div>
			</div>
			

			
			
		</div>
	)
}

function LandingFoot() {
	return (
		<div className={styles.footContainer}>
			<div
				className="items-center"
				style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
			>
				<img
					src="/logo.png"
					alt="logo"
					className="w-3.6875rem h-4.625rem"
				></img>
				<p className="text-2.625rem font-800">Flare Dapp</p>
			</div>
			<div className={styles.footText}>
				© Flare Dapp 2023 | All Rights Reserved
			</div>
			<div className={styles.footTextS}>
				© Flare Dapp 2023 All Rights Reserved
			</div>
		</div>
	)
}
export { LandingContent, LandingFoot, LandingHeader }
