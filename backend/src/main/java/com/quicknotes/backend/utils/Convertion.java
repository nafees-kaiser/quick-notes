package com.quicknotes.backend.utils;

import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.stereotype.Component;

public final class Convertion {
    public static <K, T> T covertToView(K object, Class<T> view){
        return new SpelAwareProxyProjectionFactory().createProjection(view, object);
    }
}
