import baseImg from '../../images/Hero/animated-bg/base.png';
import walletImg from '../../images/Hero/animated-bg/wallet.png';
import floatImg from '../../images/Hero/animated-bg/float.png';
import lightoffImg from '../../images/Hero/animated-bg/lightoff.png';
import lightonImg from '../../images/Hero/animated-bg/lighton.png';
import cardImg from '../../images/Hero/animated-bg/card.png';
import lightImg from '../../images/Hero/animated-bg/light.png';
import coinImg from '../../images/Hero/animated-bg/coin.png';

export default function AnimatedImage() {
  return (
    <div>
      <div className="relative   w-full h-[30rem] md:w-[37.5rem] md:h-[37.5rem] md:mx-0 ">
        <img
          src={walletImg}
          className="absolute w-[40%] left-[25%] bottom-[20%]"
          alt=""
        ></img>
        <img
          src={baseImg}
          className="absolute top-[39%] right-0  w-[36%]"
          alt=""
        ></img>
        <img
          src={floatImg}
          className="absolute top-[28%] right-[11.5%] animate-spin-slow w-[13%]"
          alt=""
        ></img>
        <img
          src={lightoffImg}
          className="absolute top-[21.15%] hidden w-[35.1%]"
          alt=""
        ></img>
        <img
          src={lightonImg}
          className="absolute top-[21.15%] w-[35.1%]"
          alt=""
        ></img>
        <img
          src={lightImg}
          className="absolute -top-[0.9%]  left-[5.6%] animate-pulse w-[22.05%]"
          alt=""
        ></img>
        <img
          src={coinImg}
          className="absolute top-[1.8%]  left-[9.9%]  w-[5.85%] animate-move-up"
          alt=""
        ></img>
        <img
          src={coinImg}
          className="absolute top-[10.35%]  left-[18.9%]  w-[5.85%] animate-move-up"
          alt=""
        ></img>
        <img
          src={coinImg}
          className="absolute top-[18.9%]  left-[9.9%]  w-[5.85%] animate-move-up"
          alt=""
        ></img>
        <img
          src={cardImg}
          className="absolute top-[8%] right-[35%] w-[23%]"
          alt=""
        ></img>
      </div>
    </div>
  );
}
