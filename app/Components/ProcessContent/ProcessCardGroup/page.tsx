import Animation from '../../Animations/Animations'
import { ProcessCard } from '../ProcessCard/page'
import s from "./styles.module.scss";

interface IProccesCardGroupProps {
    position?: string;
}

export const ProcessCardGroup: React.FC<IProccesCardGroupProps> = ({
    position,
}) => {
    const cards = Array(4).fill(null);

    return (
        <div className={s.processCardGroup}>
            {cards.map((_, index) => (
                <Animation
                    key={index}
                    delay={100}
                    variant={position === "left" ? "slide-left" : "slide-right"}
                >
                    <ProcessCard />
                </Animation>
            ))}
        </div>
    );
};
