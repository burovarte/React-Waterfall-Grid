export {}
// import * as React from "react";

// /**
//  * Configuration for Plock.
//  * This is a map of breakpoints to the number of columns to use for that breakpoint.
//  *
//  * const breakpoints = [
//  *   { size: 640, columns: 1 },
//  *   { size: 768, columns: 2 },
//  *   { size: 1024, columns: 3 },
//  *   { size: 1280, columns: 4 },
//  * ];
//  */

// type UseWindowWidthParams = { debounceMs: number };

// export function useWindowWidth({ debounceMs }: UseWindowWidthParams) {
// 	const [width, setWidth] = React.useState(window.innerWidth);
// 	const handleResize = useDebounce(
// 		() => setWidth(window.innerWidth),
// 		debounceMs
// 	);

// 	React.useEffect(() => {
// 		window.addEventListener("resize", handleResize);
// 		return () => window.removeEventListener("resize", handleResize);
// 	}, [handleResize]);

// 	return width;
// }

// export function useDebounce(fn: (...args: any[]) => any, ms: number) {
// 	let timeout: ReturnType<typeof setTimeout>;

// 	return (...args: any[]) => {
// 		clearTimeout(timeout);
// 		timeout = setTimeout(() => fn(args), ms);
// 	};
// }

// type PlockProps = {
// 	as?: React.ComponentType | keyof JSX.IntrinsicElements;
// 	className: string;
// 	style: React.CSSProperties;
// 	gap?: number;
// 	debounce?: number;
// 	nColumns?: number;
// };

// export const Plock = React.forwardRef<any, PlockProps>(
// 	(
// 		{
// 			as: Comp = "div",
// 			children,
// 			className,
// 			style,
// 			gap = 10,
// 			debounce = 200,

// 			/**
// 			 * TODO:
// 			 * This will be renamed to breakpoints in a future major release!
// 			 */
// 			nColumns: breakpoints = 3,
// 		},
// 		forwardedRef
// 	) => {
// 		const width = useWindowWidth({ debounceMs: debounce });
// 		const [columns, setColumns] = React.useState([]);

// 		React.useLayoutEffect(() => {
// 			const first = (breakpoints) => {
// 				return breakpoints?.[0];
// 			};

// 			const last = (breakpoints) => {
// 				return breakpoints?.[breakpoints.length - 1];
// 			};

// 			const sorted = (breakpoints) => {
// 				return breakpoints.sort((a, b) => a.size - b.size);
// 			};

// 			const contained = (breakpoints, width) => {
// 				return breakpoints.filter((el) => el.size <= width);
// 			};

// 			const isNumber = (element) => typeof element === "number";

// 			const breakpoint = isNumber(breakpoints)
// 				? { columns: breakpoints }
// 				: last(sorted(contained(breakpoints, width))) ??
// 				  first(sorted(breakpoints));

// 			const columnsForBreakpoint = Array.from(
// 				{ length: breakpoint.columns },
// 				(e) => []
// 			);

// 			React.Children.forEach(children, (child, index) => {
// 				const key = `item-${index}`;
// 				const cloned = React.cloneElement(child, {
// 					...child.props,
// 					key: key,
// 				});

// 				columnsForBreakpoint[index % columnsForBreakpoint.length].push(cloned);
// 			});

// 			setColumns(columnsForBreakpoint);
// 		}, [children, breakpoints, width]);

// 		const defaultStyles = {
// 			mainGrid: {
// 				display: "grid",
// 				gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
// 				columnGap: gap,
// 				alignItems: "start",
// 			},
// 			columnGrid: {
// 				display: "grid",
// 				gridTemplateColumns: "100%",
// 				rowGap: gap,
// 			},
// 		};

// 		return (
// 			<Comp
// 				ref={forwardedRef}
// 				data-testid="plock-container"
// 				className={className}
// 				style={{ style, ...defaultStyles.mainGrid }}
// 			>
// 				{columns.map((column, index) => {
// 					return (
// 						<div
// 							data-testid="plock-column"
// 							style={defaultStyles.columnGrid}
// 							key={index}
// 						>
// 							{column}
// 						</div>
// 					);
// 				})}
// 			</Comp>
// 		);
// 	}
// );
