'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react';
/* The line `const supabase = createClientComponentClient();` is creating a Supabase client instance
using the `createClientComponentClient` function. This client instance can be used to interact with
the Supabase backend, such as making API requests to fetch data or perform actions like incrementing
the view count in this case. */

const supabase = createClientComponentClient();

/**
 * The `ViewCounter` component is a JavaScript function that increments and displays the view count for
 * a specific slug using Supabase.
 * @returns The `ViewCounter` component returns a `div` element that displays the number of views if
 * `showCount` prop is `true`. If `showCount` is `false`, it returns `null`.
 */
const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  /* The `useEffect` hook in the code is used to perform side effects in a functional component. In
  this case, it is used to increment the view count by calling the `increment` stored procedure in
  Supabase. */
  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc('increment', {
          slug_text: slug,
        });

        if (error) {
          console.error(
            'Error incrementing view count inside try block:',
            error
          );
        }
      } catch (error) {
        console.error(
          'An error occurred while incrementing the view count:',
          error
        );
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  /* The `useEffect` hook in the code is used to fetch the current view count from the Supabase
  database and update the `views` state variable. */
  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: slug })
          .single();

        if (error) {
          console.error(
            'Error incrementing view count inside try block:',
            error
          );
        }

        setViews(data ? data.count : 0);
      } catch (error) {
        console.error(
          'An error occurred while incrementing the view count:',
          error
        );
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
