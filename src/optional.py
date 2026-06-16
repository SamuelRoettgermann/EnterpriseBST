class Optional[T]:
    value: T | None

    def __init__(self, value: T | None = None):
        self.value = value

    def get(self):
        return self.value

    def set(self, value: T):
        self.value = value

    def missing(self):
        return self.value is None