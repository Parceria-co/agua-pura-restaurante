import { useEffect, useRef, useState } from "react";
import styles from "./DishSection.module.css";

export default function DishSection({
    info,
    onClick,
    sectionRefs,
    ref
}) {

    const hasMoreThanOne = (it) => {
        if (!it.options) return false;

        return it.options.length > 1;
    }

    const hasMeasure = (it) => {
        
        return it.some(item => item.measure);
    }

    const formatMeasures = (options=[]) => {
        return options
            .filter(opt => opt.measure?.value)
            .map((opt, index, array) => {
                const value = opt.measure.value;
                const formatted = opt.measure.formatted;

                if (index === array.length - 1) {
                    return formatted;
                }

                return value;
            })
            .join(" / ");
    }

    return (
        <section className={styles.wrapperFoods}>
            {info && info.map((it, idx) => (
                <div 
                    key={it.id}
                    className={styles.cotainerFoods}
                    ref={(el) => (sectionRefs.current[idx] = el)}
                >
                    <div className={styles.titleFoods}>
                        <p>{it.category}</p>
                    </div>
                    
                    <div className={styles.foods}>
                        <h2>{it.category}</h2>
                        <div className={styles.wrapperCards}>
                            {it.itens.map((dish) => (
                                <div 
                                    className={styles.card}
                                    onClick={() => { onClick(dish) }}
                                    ref={(el) => (ref.current[dish.id] = el)}
                                >
                                    <div className={styles.wrapperImage}>
                                        <img src={dish.image} alt="comida" />
                                    </div>
                                    {!hasMoreThanOne(dish) ? (
                                        <div className={styles.wrapperInfoFoods}>
                                            <h3 className={styles.title}>{dish.name} {dish.measure?.formatted}{/*{dish.options?.[0].weight}*/}</h3>
                                            <div className={styles.priceAndCode}>
                                                <p className={styles.price}>
                                                    {/* {dish.options?.[0].price.toLocaleString("pt-BR", {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    })}  */}
                                                    {dish.price.formatted}
                                                </p>
                                                <p className={styles.code}>
                                                    {/* Cód: {dish.options?.[0].code} */}
                                                    Cód: {dish.id}
                                                </p>
                                            </div>
                                            <p className={styles.description}>
                                                {dish.description}
                                            </p>
                                        </div>
                                    ):(
                                        <div className={styles.wrapperInfoFoods}>
                                            <h3 className={styles.title}>{dish.name} {formatMeasures(dish.options)}</h3>
                                            <p className={styles.description}>
                                                {dish.description}
                                            </p>
                                            <div className={styles.wrapperNameAndPriceAndCode}>
                                                {dish.options?.map(opt => (
                                                    <div className={styles.nameAndPriceAndCode}>
                                                        <p className={styles.nameAndLabel}>{dish.name} {opt.label}{" "}</p>
                                                        <p className={styles.priceAndCode}>
                                                            {opt.price.formatted} - ({opt.id})
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}