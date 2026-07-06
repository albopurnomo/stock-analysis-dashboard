import React from 'react';

const CategoryPage = ({ categories, onSelectCategory }) => {
    const categoryNames = Object.keys(categories);

    return (
        <div className="category-page">
            <div className="category-header">
                <h2>GaleriSaham List</h2>
            </div>
            
            <div className="category-list">
                {categoryNames.map((name) => {
                    const count = categories[name]?.length || 0;
                    return (
                        <div 
                            key={name} 
                            className="category-card animate-card"
                            onClick={() => onSelectCategory(name)}
                        >
                            <div className="category-card-glow"></div>
                            <div className="category-card-content-horizontal">
                                <h3>{name}</h3>
                                <span className="card-arrow">→</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryPage;
