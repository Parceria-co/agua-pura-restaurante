import { BiCar } from "react-icons/bi";
import styles from "./EventDifferences.module.css";
import { LuToyBrick } from "react-icons/lu";
import { GiEnergyTank } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";

export default function EventDifferences({unit}) {

    const iconsMap = {
        car: <BiCar className={styles.icon} />,
        brick: <LuToyBrick className={styles.icon} />,
        tank: <GiEnergyTank className={styles.icon} />,
        ball: <IoIosFootball className={styles.icon} />
    };

    return (
        <section 
            id="diferenciais"
            className={styles.wrapperDiferencials}
        >
            <div className={styles.title}>
                <h2>Diferenciais Exclusivos</h2>
                <p>Pensando em sua comodiadade, nossos espaços oferecem:</p>
            </div>
            <div className={styles.wrapperImageAndInfo}>
            {unit.info["differences"].map((info, idx) => (
                <div 
                    className={styles.imageAndInfo}
                    key={idx}
                >
                    <div>
                        {iconsMap[info.icon]}
                    </div>
                    <p>{info.iconText}</p>
                </div>

            ))}
            </div>
        </section>
    )
}