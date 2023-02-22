import ItemList from './ItemList';

const Content = ({ items, handleCheck }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your List Is Empty.</p>
            )}
        </main>
    )
}
export default Content
