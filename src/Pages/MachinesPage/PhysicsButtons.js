import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import styles from './AutomatsPage.css';
import { useTranslation } from 'react-i18next';

function PhysicsButtons({ selectedMachine, setSelectedMachine }) {
    const { t, i18n } = useTranslation();


    const getResponsiveMachineData = () => {
        const width = window.innerWidth;

        const breakpoint = (() => {
            if (width > 1800) return 'xl';
            if (width > 1400) return 'lg';
            if (width > 1024) return 'md';
            if (width > 768) return 'sm';
            if (width > 300) return 'xs';
            return 'xxs';
        })();

        const configs = {
            xl: [
                [-20, 0],
                [100, 0],
                [-80, -0.6],
                [-220, 0],
                [150, 0.5],
                [200, -0.4],
                [230, 0],
                [0, -0.4],
            ],
            lg: [
                [-140, 0.05],
                [60, 0],
                [-60, -0.6],
                [-120, 0.25],
                [90, 0.5],
                [130, -0.1],
                [-250, -0.4],
                [-30, -0.03],
            ],
            md: [
                [-100, 0.05],
                [30, 0],
                [10, 0.6],
                [-120, 0.25],
                [70, 0.5],
                [50, -0.3],
                [-200, -0.1],
                [-40, -0.03],
                // 
            ],
            sm: [
                [15, -0],
                [-100, 0],
                [-60, -0.6],
                [-10, -0.2],
                [60, 0],
                [-50, -0.4],
                [-20, -0.3],
                [-65, 0.1],
            ],
            // 
            xs: [
                [0, 0],
                [1, 0.5],
                [0, -0.3],
                [3, -0.5],
                [0, -0.6],
                [1, 0.3],
                [-21, -0.6],
                [1, -0.6],
            ],
            xxs: [
                [-40, 0.05],
                [10, 0],
                [0, 0.6],
                [-40, 0.25],
                [20, 0.5],
                [30, -0.3],
                [-50, 0.1],
                [0, -0.03],
            ],
        };

        const data = [
            { id: 1, label: 'All', width: 80, height: 30 },
            { id: 2, label: t('machines.PizzaMachine'), width: 110, height: 40 },
            // { id: 3, label: t('machines.FriesMachine'), width: 120, height: 40 },
            { id: 3, label: t('machines.GourmetMachine') + " " + t('machines.with'), width: 120, height: 40 },
            // { id: 4, label: t('machines.IceCreamMachine'), width: 120, height: 40 },
            // { id: 5, label: t('machines.CandyMachine'), width: 160, height: 40 },
            // { id: 6, label: t('machines.BeerMachine'), width: 150, height: 40 },
            { id: 4, label: t('machines.Snack'), width: 150, height: 40 },
            { id: 5, label: t('machines.ReturnMachine'), width: 130, height: 40 },
            { id: 6, label: t('machines.GourmetMachine') + " " + t('machines.without'), width: 180, height: 40 },
        ];

        return data.map((machine, index) => ({
            ...machine,
            initialXOffset: configs[breakpoint][index][0],
            initialAngle: configs[breakpoint][index][1],
        }));

    };

    // Update on mount, resize, and language change
    useEffect(() => {
        const updateData = () => {
            const updatedData = getResponsiveMachineData();
            setMachineData(updatedData);

            // Sync selection
            const index = updatedData.findIndex(m => m.label === selectedMachine);
            if (index !== -1) setSelectedIndex(index);
        };

        updateData();
        window.addEventListener('resize', updateData);
        return () => window.removeEventListener('resize', updateData);
    }, [i18n.language]);




    const [machineData, setMachineData] = useState(getResponsiveMachineData());
    const sceneRef = useRef(null);
    const buttonsRef = useRef([]);
    const bodiesRef = useRef([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const hasInitialized = useRef(false); // Track if the physics simulation has already run

    useEffect(() => {
        const handleResize = () => {
            setMachineData(getResponsiveMachineData());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const index = machineData.findIndex(m => m.label === selectedMachine);
        if (index !== -1) {
            setSelectedIndex(index);
        }
    }, [selectedMachine]);

    useEffect(() => {
        let timeoutId; // To store the timeout ID

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        setIsVisible(false);
                    }, 30000); // 30000 ms = half minute
                } else {
                    clearTimeout(timeoutId);
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sceneRef.current) {
            observer.observe(sceneRef.current);
        }

        // Cleanup on unmount or visibility changes
        return () => {
            if (sceneRef.current) {
                observer.unobserve(sceneRef.current);
            }
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        if (!isVisible || hasInitialized.current) return;

        hasInitialized.current = true;

        const scene = sceneRef.current;
        const engine = Matter.Engine.create();
        const world = engine.world;
        const render = Matter.Render.create({
            element: scene,
            engine: engine,
            options: {
                width: scene ? scene.offsetWidth : window.innerWidth,
                height: 300,
                wireframes: false,
                background: 'transparent',
                visible: false,
            },
        });

        render.canvas.style.pointerEvents = "none"; // Prevent interaction
        render.canvas.style.display = 'none';

        world.gravity.y = 0.8; // Slight gravity for a natural fall

        const centerX = render.options.width / 2;

        const bodies = machineData.map((machine, index) => {
            const startY = -60 - index * 5; // Different heights for staggered falling
            const startX = centerX + machine.initialXOffset;

            const body = Matter.Bodies.rectangle(
                startX,
                startY,
                machine.width,
                machine.height,
                {
                    friction: 0.1,
                    restitution: 0.2,
                    density: 0.001,
                    frictionAir: 0.01,
                    inertia: Infinity,
                    label: machine.label
                }
            );

            Matter.Body.rotate(body, machine.initialAngle || 0);

            return body;
        });

        bodiesRef.current = bodies;

        const divider = Matter.Bodies.rectangle(
            centerX,
            310,
            render.options.width * 0.5,
            0,
            { isStatic: true, render: { visible: false } }
        );

        const ground = Matter.Bodies.rectangle(
            render.options.width / 2,
            render.options.height + 25,
            render.options.width + 50,
            50,
            { isStatic: true }
        );

        Matter.World.add(world, [...bodies, divider, ground]);

        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);
        Matter.Render.run(render);

        const updatePositions = () => {
            bodies.forEach((body, index) => {
                if (buttonsRef.current[index]) {
                    const { x, y } = body.position;
                    buttonsRef.current[index].style.transform = `translate(${x - machineData[index].width / 2}px, ${y - machineData[index].height / 2}px) rotate(${body.angle}rad)`;
                }
            });
            requestAnimationFrame(updatePositions);
        };

        updatePositions();

        return () => {
            Matter.Render.stop(render);
            Matter.Engine.clear(engine);
            Matter.World.clear(world);
        };
    }, [isVisible]);

    const handleClick = (index) => {
        setSelectedIndex(index);
        setSelectedMachine(machineData[index].label);
    };

    return (
        <div
            className={styles.machineLayoutContainer}
            ref={sceneRef}
            style={{
                position: 'relative', height: '300px', overflow: 'hidden', width: '100%', borderBottom: '1px solid #525252',
            }}
        >
            {machineData.map((machine, index) => (
                <div
                    key={machine.id}
                    ref={(el) => (buttonsRef.current[index] = el)}
                    className='bodyRegularText3 filter-objects'
                    style={{
                        position: 'absolute',
                        left: `calc(0% + ${machine.initialXOffset}px)`,
                        top: '-40px',
                        padding: '16px 48px',
                        backgroundColor: selectedIndex === index ? '#7FEE64' : 'transparent',
                        textAlign: 'center',
                        lineHeight: `${machine.height}px`,
                        border: '0.5px solid #F4F4F4',
                        borderRadius: '100px',
                        color: selectedIndex === index ? '#1A1A1A' : '#FCFCFC',
                        zIndex: selectedIndex === index ? 2 : 1,
                        userSelect: 'none',
                        transform: `translateX(-50%) rotate(${machine.initialAngle || machine.rotation || 0}rad)`,
                        pointerEvents: 'auto',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleClick(index)}
                >
                    {machine.label}
                </div>
            ))}
        </div>
    );
}

export default PhysicsButtons;
