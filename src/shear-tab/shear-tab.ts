import{ App, HtmlItem, Model } from '../app'

// Calculations from Excel
import shearTabCalcs from './ShearTab_Calculation.md'

// Model
import pathToModel from './ShearTab-v1.glb'

new App({
    title: 'Shear Tab',
    groups:[
        {
            name: 'models',
            items: [
                new Model({ name: 'Shear Tab Model', path: pathToModel }),
            ]
        },
        { 
            name: 'Calculations',
            items: [
                new HtmlItem({ 
                name: 'Shear Tab Calculations', content: shearTabCalcs
                }),
            ]
        },
    ],
    addGuideLink: false,
    contributors: [
        'Samuel Leman',
        'Sophia Mitchell',
        'Samuel Nash',  
    ]
})