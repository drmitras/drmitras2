<?php
/**
 * Main index fallback template
 *
 * @package DrMitrasTheme
 */

get_header(); ?>

<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <?php if ( have_posts() ) : ?>
        <header class="mb-12">
            <h1 class="text-3xl font-extrabold text-stone-900 tracking-tight"><?php single_post_title(); ?></h1>
        </header>
        <div class="space-y-8">
            <?php while ( have_posts() ) : the_post(); ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class( 'p-6 bg-white border border-stone-200 rounded-lg' ); ?>>
                    <h2 class="text-xl font-bold text-stone-900 mb-2"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="text-xs text-stone-500 mb-4"><?php echo get_the_date(); ?></div>
                    <div class="text-sm text-stone-700 leading-relaxed"><?php the_excerpt(); ?></div>
                </article>
            <?php endwhile; ?>
        </div>
    <?php else : ?>
        <p class="text-stone-600">No content found.</p>
    <?php endif; ?>
</main>

<?php get_footer();
