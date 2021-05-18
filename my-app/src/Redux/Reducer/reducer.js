import { DELETE_PRODUCT, ADD_PRODUCT, SWITCH_CURR_PRODUCT, EDIT_PRODUCT } from '../Actions/actions';

let initialState = {
    products: [{
        id: 1,
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194372/03/sv01/fnd/PNA/fmt/png/CELL-Fraction-Fade-Men's-Training-Shoes",
        name: "Fraction Fade Men's Training",
        count: 4,
        weight: '700g',
        color: 'black',
        description: '10CELL: Visible running technology provides stable cushioning and comfort through supportive cell structure',
    },
    {
        id: 2,
        imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192491/06/sv01/fnd/PNA/fmt/png/CELL-Regulate-Woven-Men%E2%80%99s-Running-Shoes',
        name: 'Regulate Woven Men’s Running',
        count: 33,
        color: 'black',
        weight: '200g',
        description: 'A retro style updated for a modern performance shoe'
    }, {
        id: 3,
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194373/03/sv01/fnd/PNA/fmt/png/Enzo-2-Eco-Men's-Running-Shoes",
        name: "Enzo 2 Eco Men's Running",
        count: 13,
        color: 'black+yellow',
        weight: '200g',
        description: 'BETTER MATERIALS: Made with recycled materials to reduce environmental impact'
    }, {
        id: 4,
        imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/364989/01/sv01/fnd/PNA/fmt/png/PUMA-Smash-v2-Sneakers',
        name: 'PUMA Smash v2 Sneakers',
        count: 7,
        color: 'black+white',
        weight: '200g',
        description: 'The tennis-inspired silhouette features a soft suede upper and classic rubber sole. Totally classic.'
    }, {
        id: 5,
        imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194373/02/sv01/fnd/PNA/fmt/png/Enzo-2-Eco-Men's-Running-Shoes",
        name: "Enzo 2 Eco Men's Running",
        count: 21,
        color: 'gray',
        weight: '200g',
        description: 'BETTER MATERIALS: Made with recycled materials to reduce environmental impact'
    }],
    lastId: 5,
    currProduct: {

    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                products: [...state.products.filter(curr => curr.id !== action.payload)]
            }
        case ADD_PRODUCT:
            return {
                ...state,
                lastId: ++state.lastId,
                products: [...state.products, {
                    id: state.lastId,
                    ...action.payload
                }]

            }
        case SWITCH_CURR_PRODUCT:
            return {
                ...state,
                currProduct: action.payload
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map(curr => {
                    if (curr.id === action.payload.id) {
                        return action.payload
                    } else {
                        return curr;
                    }
                })
            }
        default: return state;
    }
}

