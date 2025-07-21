import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType('blogbuilder/post-grid', {
    edit: () => {
        const posts = useSelect(select =>
            select('core').getEntityRecords('postType', 'post', { per_page: 4 }), []
        );
        const blockProps = useBlockProps();

        return (
            <div {...blockProps}>
                <h3>Post Grid</h3>
                {posts?.length ? posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </div>
                )) : <p>Loading...</p>}
            </div>
        );
    },
    save: () => null,
});
