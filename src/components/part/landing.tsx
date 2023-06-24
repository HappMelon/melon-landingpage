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
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						paddingLeft: "10%",
					}}
				>
					<img src="/landing-logo.png" alt="logo" width="74px"></img>
					<div className={styles.headerTitle}>Flare Dapp</div>
				</div>
				<div className={styles.headerButtonContainer}>
					<div className={styles.headerLanguage}>
						<img src="/globe.svg" alt="logo" width="25px"></img>
						<div>En</div>
					</div>
					<div>
						<button
							style={{
								borderRadius: "50px",
								background: "linear-gradient(159deg, #F9D423 0%, #F83600 100%)",
								height: "48px",
								padding: "11px 28px",
								fontSize: "18px",
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
			<img alt="logo" width="154px" height="154px" src={props.logo}></img>
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
				<div className={styles.page1Text}>
					Flare is an aggregated information platform that incorporates
					<br />
					decentralized technologies and philosophy.
				</div>
				<div className={styles.page1ButtonContainer}>
					<button className={styles.page1Button1}>Launch Dapp</button>
					<button className={styles.page1Button2}>Join Whitelist</button>
				</div>
				<img
					alt=""
					style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
					src="/dapp.png"
					className={styles.page1Img}
				/>
			</div>
			<div className={styles.page2Container}>
				<div className={styles.page2Title}>Engage, Enlighten, Empower</div>
				<div className={styles.page2Text}>
					Our goal is to build a trustworthy, liberated and high-value social
					<br />
					network. Using mechanisms such as pledges, predictions, and token
					<br />
					incentives, we will provide users with the ability to have a voice and
					<br />a channel to prevent meaningless information.
				</div>
			</div>
			<div className={styles.page3Container}>
				<div className={styles.page3Shape}></div>
				<LandingCard title="Decentralized Universe" logo="/page3-logo1.png">
					As a service provider, we ensures a secure, anonymous and euphoric
					<br />
					experience through zk-SNARK Algorithm Encryption, Node-based Storage,
					<br />
					RSS3, ML Algorithm, and AI Language Models. With us, you can post
					<br />
					shocking news that you know, share your opinions, and vote for rights
					<br />
					and freedom.
				</LandingCard>
				<LandingCard title="Thriving Web3 Economy" logo="/page3-logo2.png">
					We increase the playability of the spreading information by means of
					<br />
					stake verification, stake prediction, and NFT token-creation, etc.,
					<br />
					all while promoting the recreation enthusiasm of KOLs. We also expand
					<br />
					your rights and authorities when you have more tokens collected or
					<br />
					rank at the top of your interest groups.
				</LandingCard>
				<LandingCard title="DAO Consensus" logo="/page3-logo3.png">
					We establish consensus in Flare Dapp, where we created mechanisms to
					<br />
					promote a transparent environment for content creation, distribution,
					<br />
					participation, verification, and feedback. By providing reasonable
					<br />
					incentives and restrictive rules that support the dual-token model, we
					<br />
					help you build your credibility and reputation.
				</LandingCard>
			</div>

			<div className={styles.page4Container}>
				<img
					src="/page4feed1.png"
					alt="hospot"
					className={styles.page4Img}
				></img>
				<div className={styles.page4TextContainer}>
					<div className={styles.page4TextTitle}>Hotspot Timeline</div>
					<div className={styles.page4TextSubTitle}>
						Systematic Information features
					</div>
					<div className={styles.page4TextContent}>
						Flare not only provides a decentralized place to share and access
						<br />
						information, but also hopes to build a system to structure complex
						<br />
						information and present it to users in an intuitive and effective
						way. <br />
						<br />
						Flare allows users to participate in the process of information
						<br />
						verification, and any information can be evaluated or predicted by
						<br />
						community users. Through the collective wisdom of users, the most
						<br />
						valuable and truthful information is filtered out, while incorrect
						<br />
						or misleading information is dealt with.
					</div>
				</div>
			</div>

			<div className={styles.page4Container}>
				<div className={styles.page4TextContainer}>
					<div className={styles.page4TextTitle}>Wallet</div>
					<div className={styles.page4TextSubTitle}>
						Introduction to the on-chain and off-
						<br />
						chain paralleling incentive system
					</div>
					<div className={styles.page4TextContent}>
						Users can use centralized authentication and receive incentives
						<br />
						generated by actions within the platform, i.e., earn off-chain
						$Flare.
						<br />
						<br /> Off-chain $Flare can be circulated and consumed within the
						<br />
						platform, such as paid subscriptions, purchase of paid content or
						<br />
						participation in predictions.
						<br />
						<br /> Off-chain $Flare is stored on a centralized server and cannot
						be <br />
						exchanged for fiat currency or other virtual tokens, but web2 users
						<br />
						can withdraw off-chain $Flare to their wallet address after
						<br />
						establishing their DID to start their Web3 journey.
					</div>
				</div>
				<img
					src="/page4feed2.png"
					alt="hospot"
					className={styles.page4Img}
				></img>
			</div>
			<div className={styles.page4Container}>
				<img
					src="/page4feed3.png"
					alt="hospot"
					className={styles.page4Img}
				></img>
				<div className={styles.page4TextContainer}>
					<div className={styles.page4TextTitle}>Pledge Forecast</div>
					<div className={styles.page4TextSubTitle}>Unique pledge play</div>
					<div className={styles.page4TextContent}>
						Freedom does not mean no responsibility. While users enjoy the
						<br />
						ability to interact with content, they need to demonstrate that this
						<br />
						behaviour provides value, not just irresponsible the &quot keyboard
						<br />
						warrior &quot behaviour.
						<br />
						<br /> Flare wants users to consume content not as a waste of time,
						but as <br />a step towards the truth. The mechanism of pledging
						tokens to <br />
						predict content provides incentives for insightful and capable
						users, <br />
						while leaving the direction of events in the hands of the community.
					</div>
				</div>
			</div>

			<div className={styles.page5Container}>
				<div className={styles.page4TextTitle}>More immersive experience</div>
				<div className={styles.page5SubContainer}>
					<div className={styles.page5ImgContainer}>
						<div className={styles.page5ImgBg}></div>
						<img
							alt="app"
							src="/page5img.png"
							className={styles.page5Img}
						></img>
					</div>
					<div className={styles.page5TextContainer}>
						<div className={styles.page5TextSubTitle}>
							Enjoy flare AI assistant
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
				<div>
					<img
						alt="darkmode"
						src="page6dark.png"
						className={styles.page6ImgFront}
					></img>
					<img
						alt="lightmode"
						src="/page6light.png"
						className={styles.page6ImgBack}
					></img>
				</div>
				<div className={styles.page6Text}>Light mode & Dark mode</div>
				<div className={styles.page6Shape}></div>
			</div>
			<div className={styles.page7Container}>
				<div className={styles.page7Title}>Multi-Language</div>
			</div>
			<div className={styles.page8Container}>
				<div className={styles.page8Title}>TECHNOLOGY</div>
				<div className={styles.page8Text}>A Trusted Way For Information</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignContent: "center",
						justifyContent: "space-between",
						marginTop: "82px",
					}}
				>
					<div>
						<div className={styles.page8CardTitle}>PROOF OF STAKE</div>
						<div className={styles.page8CardText}>99%</div>
					</div>
					<div>
						<div className={styles.page8CardTitle}>LOW FEES</div>
						<div className={styles.page8CardText}>$0.02</div>
					</div>
					<div>
						<div className={styles.page8CardTitle}>FAST ENTRANSACTIONS</div>
						<div className={styles.page8CardText}>8 Sec</div>
					</div>
				</div>
			</div>
			<div
				style={{
					width: "100%",
					height: "715px",
					alignContent: "left",
					padding: "163px",
				}}
			>
				<div className={styles.page8Title}>FOUNDER TEAM</div>
			</div>
		</div>
	)
}
function LandingFoot() {
	return (
		<div className={styles.footContainer}>
			<div
				style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
			>
				<img src="/landing-logo.png" alt="logo"></img>
				<div>Flare Dapp</div>
			</div>
			<div className={styles.footText}>
				© Flare Dapp 2023 | All Rights Reserved
			</div>
		</div>
	)
}
export { LandingContent, LandingFoot, LandingHeader }
